const navBurger = document.querySelector('#nav-hamburger')
const navBurgerLinks = document.querySelector('.navbar-links-hamburger')

navBurger.addEventListener("click",()=>{
    navBurgerLinks.classList.toggle('show-hamburger')
})




const inputSlider = document.querySelector('#input-slider')
const inputValue = document.querySelector('#slider-value')

inputSlider.addEventListener('input',()=>{
    valPercent = (inputSlider.value/inputSlider.max)*100;
    inputValue.textContent = inputSlider.value;
    console.log(slider.value)
})