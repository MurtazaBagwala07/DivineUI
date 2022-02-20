const hamburger = document.querySelector(".navbar-hamburger");
const sidebar = document.querySelector(".sidebar-wrapper")

const moonIcon = document.querySelector("#moon-icon")
const sunIcon = document.querySelector("#sun-icon")

console.log(moonIcon,sunIcon)

moonIcon.addEventListener("click",()=>{
    moonIcon.classList.toggle('hide-mode')
    sunIcon.classList.toggle('hide-mode')
    document.body.classList.toggle('dark-theme')
})

sunIcon.addEventListener("click",()=>{
    moonIcon.classList.toggle('hide-mode')
    sunIcon.classList.toggle('hide-mode')
    document.body.classList.toggle('dark-theme')
})

hamburger.addEventListener('click',()=>{
    console.log('working')
    sidebar.classList.toggle("show")
})