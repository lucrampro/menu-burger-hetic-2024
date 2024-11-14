const buttonBurger = document.querySelector('.icon-burger');
const menu = document.querySelector('.menu');
buttonBurger.addEventListener('click', function() {
    menu.classList.toggle('menu-hidden')
    buttonBurger.classList.toggle('icon-cross')
})
