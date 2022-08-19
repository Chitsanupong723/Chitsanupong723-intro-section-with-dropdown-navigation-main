let menu = document.querySelector('.menu-open');
let backdrop = document.querySelector('.back-drop');
let menuclose = document.querySelector('.menu-close');
let navbar = document.querySelector('.logo-navbar');


menu.addEventListener('click',function(){
    menu.classList.add('active');
    backdrop.classList.add('active');
    menuclose.classList.add('active');
    navbar.classList.toggle('active');
});

menuclose.addEventListener('click',function(){
    menu.classList.remove('active');
    backdrop.classList.remove('active');
    menuclose.classList.remove('active');
    navbar.classList.remove('active');
});

