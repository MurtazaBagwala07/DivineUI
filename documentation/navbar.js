const navBurger = document.querySelector('#nav-hamburger')
const navBurgerLinks = document.querySelector('.navbar-links-hamburger')

navBurger.addEventListener("click",()=>{
    navBurgerLinks.classList.toggle('show-hamburger')
})
