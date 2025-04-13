const slider = document.getElementById("length");
const sliderValue = document.getElementById("slider__value");

const rangBgColor = {
    bgColorA: "#a4ffaf",
    bgColorB: "#18171F"
};

function updateSliderBackground(el) {
    const value = (el.value - el.min) / (el.max - el.min) * 100;
    el.style.background = `linear-gradient(90deg,
        ${rangBgColor.bgColorA} 0%,
        ${rangBgColor.bgColorA} ${value}%,
        ${rangBgColor.bgColorB} ${value}%,
        ${rangBgColor.bgColorB} 100%)`;
}

slider.addEventListener('input', function () {
    updateSliderBackground(this);
    sliderValue.textContent = this.value;
    checkPasswordComplexity(lengthCharacters, sumCheckboxes)
});

updateSliderBackground(slider);
