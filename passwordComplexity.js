/* Менее 8 символов или только 1 категория → слабый

8–11 символов и ≥2 категории → средний

≥12 символов и все 4 категории → сильный */

/* const slider = document.getElementById("length"); */
const checkboxes = document.querySelectorAll(".checkbox__input");


/* Listeners */
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
        /* Every time when "click" we got a number of checked checkboxes*/
        let quantityCheckboxes = sumCheckboxes(); 
    });
});







/* Get quantity of checked checkboxes */
function sumCheckboxes() {
    let checked = Array.from(checkboxes).filter((checkbox) => checkbox.checked);
    return checked.length;
}

/* Check password complexity */
function checkPasswordComplexity(lengthCharacters, sumCheckboxes) {
    
}