const hamburger = document.querySelector(".navbar-hamburger");
const sidebar = document.querySelector(".sidebar-wrapper")

const moonIcon = document.querySelector("#moon-icon")
const sunIcon = document.querySelector("#sun-icon")

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
    sidebar.classList.toggle("show")
})