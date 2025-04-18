/* const slider = document.getElementById("length"); */
const checkboxes = document.querySelectorAll(".checkbox__input");
const createBtn = document.querySelector(".password-generator__button");
const progressBar = document.querySelectorAll(".strength__bar");
const lvlField = document.querySelector(".strength__lvl-complexity");

const arrayOfComplexity = ["WEAK", "SIMPLE", "MEDIUM", "STRONG"];
let quantityCheckboxes = 0;

/* Listeners */
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        /* Every time when "click" we got a number of checked checkboxes*/
        quantityCheckboxes = sumCheckboxes(); 
        checkPasswordComplexity(slider.value, quantityCheckboxes);
    });
});

createBtn.addEventListener("click", () => {
    /* when the button pressed  */
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


checkPasswordComplexity(slider.value, sumCheckboxes);
