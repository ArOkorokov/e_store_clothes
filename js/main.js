'use strict'

function myMegaMenu() {
    let a = document.querySelector('.menu-link:nth-child(1)');
    let b = document.querySelector('.submenu');
        a.addEventListener('click', function() {
                b.classList.toggle('submenu-open');
            }
        );
}
myMegaMenu();

function myBurgerOpen() {
    let a = document.querySelector('.header-burger');
    let b = document.querySelector('.menu');
        a.addEventListener('click', function() {
            a.classList.toggle('header-burger_open');
            b.classList.toggle('header-menu_open');
        });
}
myBurgerOpen();

function myPlaceHolder() {
    let a = document.querySelector('.header-input');
    let b = document.querySelector('.header-label');
    a.addEventListener('blur', function() {
        if(a.value != '') {
            b.textContent = '';
        } else if (a.value == '') {
            b.textContent = 'Search for...';
        }
    })
}
myPlaceHolder();

