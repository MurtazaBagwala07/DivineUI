const inputSlider = document.querySelector('#input-slider')
const inputValue = document.querySelector('#slider-value')


inputSlider.addEventListener('input',()=>{
    valPercent = (inputSlider.value/inputSlider.max)*100;
    inputValue.textContent = inputSlider.value;
    console.log(slider.value)
})