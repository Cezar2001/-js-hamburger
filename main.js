const burger = document.querySelector('.header-right');

burger.addEventListener('click', function () {
    const apriMenu = document.querySelector('.hamburger-menu')
    apriMenu.classList.add('active');  
})

const chiudi = document.querySelector('.close');

chiudi.addEventListener('click', function () {
    const chiudiMenu = document.querySelector('.hamburger-menu')
    chiudiMenu.classList.remove('active');  
})

