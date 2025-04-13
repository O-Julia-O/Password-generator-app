const slider = document.getElementById("length");
const sliderValue = document.getElementById("slider__value");

function updateSliderBackground(el) {
    const value = (el.value - el.min) / (el.max - el.min) * 100;
}

slider.addEventListener('input', function () {
    updateSliderBackground(this);
    console.log(slider.value);
    sliderValue.textContent = `${slider.value}`;
});

updateSliderBackground(slider);