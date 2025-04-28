/* const slider = document.getElementById("length"); */
const checkboxes = document.querySelectorAll(".checkbox__input");
const createBtn = document.querySelector(".password-generator__button");
const progressBar = document.querySelectorAll(".strength__bar");
const lvlField = document.querySelector(".strength__lvl-complexity");
const outputText = document.querySelector(".output__text");

const arrayOfComplexity = ["WEAK", "SIMPLE", "MEDIUM", "STRONG"];
let quantityCheckboxes = 0;
/* array of chosen checkboxes */
let chosenCheckboxesArray = [];

/* Listeners */
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const cb = event.target; //input not label
      const value = cb.name;             // или cb.name / cb.value
      const state = cb.checked;     // true = включен, false = отжат

        /* Every time when "click" we got a number of checked checkboxes*/
        quantityCheckboxes = sumCheckboxes(); 
        checkPasswordComplexity(slider.value, quantityCheckboxes);
    });
});

createBtn.addEventListener("click", () => {
    /* when the button pressed  */
    //let password = generatePassword([1,2,3], 15);
    chosenCheckboxesArray = [];

    /* add checkboxes to the array  */
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
          chosenCheckboxesArray.push(checkbox.name);
      }
    })

    /* generate password */
    outputText.value = generatePassword(chosenCheckboxesArray, slider.value);
});

slider.addEventListener("change", () => {
    checkPasswordComplexity(slider.value, quantityCheckboxes);
});


/* Get quantity of checked checkboxes */
function sumCheckboxes() {
    let checked = Array.from(checkboxes).filter((checkbox) => checkbox.checked);
    return checked.length;
}

/* Check password complexity */
function checkPasswordComplexity(lengthCharacters, sumCheckboxes) {
    // Reset all bars
  progressBar.forEach(bar => {
    bar.className = "strength__bar";
  });

  // SIMPLE (weakest): short or only 1 type
  if (lengthCharacters < 8 || sumCheckboxes === 1) {
    progressBar[0].classList.add("bg-red");
    lvlField.textContent = arrayOfComplexity[0];
    return;
  }

  // STRONG (green)
if (lengthCharacters >= 16 && sumCheckboxes === 4) {
    for (let i = 0; i < 4; i++) {
      progressBar[i].classList.add("bg-green");
      /* lvlField.textContent = arrayOfComplexity[3]; */
    }
  } else if (lengthCharacters >= 12 && sumCheckboxes >= 3) {
    for (let i = 0; i < 3; i++) {
      progressBar[i].classList.add("bg-yellow");
      lvlField.textContent = arrayOfComplexity[2];
    }
  } else if (lengthCharacters >= 8 && sumCheckboxes >= 2) {
    for (let i = 0; i < 2; i++) {
      progressBar[i].classList.add("bg-orange");
      lvlField.textContent = arrayOfComplexity[1];
    }
  } else {
    progressBar[0].classList.add("bg-red");
  }
}

/* generate password */
/* array of chosen checkboxes, character length */
function generatePassword(array, length) {
  // password
  let password = "";

  const types = {
    Uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    Lovercase: "abcdefghijklmnopqrstuvwxyz",
    Numbers: "0123456789",
    Symbols: "!@#$%^&*()_+[]{}|;:,.<>?",
  };

  // Ensure at least one character from each selected type
  array.forEach((type) => {
    if (types[type]) {
      password += getRandomCharacter(type);
    }
  });

  // Fill the rest of the password to match the desired length
  const allSelectedCharacters = array
    .map((type) => types[type])
    .join("");

  while (password.length < length) {
    password += allSelectedCharacters[
      Math.floor(Math.random() * allSelectedCharacters.length)
    ];
  }

  // Shuffle the password to make it more random
  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  return password;
}

function getRandomCharacter(type) {
  const types = {
    Uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    Lovercase: "abcdefghijklmnopqrstuvwxyz",
    Numbers: "0123456789",
    Symbols: "!@#$%^&*()_+[]{}|;:,.<>?",
  };

  return types[type][Math.floor(Math.random() * types[type].length)];
}

checkPasswordComplexity(slider.value, sumCheckboxes);
