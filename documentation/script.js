const hamburger = document.querySelector(".navbar-hamburger");
const sidebar = document.querySelector(".sidebar-wrapper")

const moonIcon = document.querySelector("#moon-icon")
const sunIcon = document.querySelector("#sun-icon")

const inputSlider = document.querySelector('#input-slider')
const inputValue = document.querySelector('#slider-value')

const navBurger = document.querySelector('#nav-hamburger')
const navBurgerLinks = document.querySelector('.navbar-links-hamburger')
console.log(navBurger)
navBurger.addEventListener("click",()=>{
    console.log('yooooo')
    navBurgerLinks.classList.toggle('show-hamburger')
})

inputSlider.addEventListener('input',()=>{
    valPercent = (inputSlider.value/inputSlider.max)*100;
    inputValue.textContent = inputSlider.value;
    console.log(slider.value)
})

if(localStorage.getItem('dark')){
    moonIcon.classList.toggle('hide-mode')
    sunIcon.classList.toggle('hide-mode')
    document.body.classList.toggle('dark-theme')
}

moonIcon.addEventListener("click",()=>{
    moonIcon.classList.toggle('hide-mode')
    sunIcon.classList.toggle('hide-mode')
    document.body.classList.toggle('dark-theme')
    localStorage.setItem('dark',true)
})

sunIcon.addEventListener("click",()=>{
    moonIcon.classList.toggle('hide-mode')
    sunIcon.classList.toggle('hide-mode')
    document.body.classList.toggle('dark-theme')
    localStorage.setItem('dark',false)

})

hamburger.addEventListener('click',()=>{
    console.log('working')
    sidebar.classList.toggle("show")
})