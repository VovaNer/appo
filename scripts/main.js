'use strict';

const menuBtn = document.querySelector('.nav-burger'),
    headerArrow = document.querySelector('.header-menu__arrLink'),
    headerSubmenu = document.querySelector('.header-submenu');

let menuOpen = false;
let headerSubmenuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

headerArrow.addEventListener('click', () => {
    if (!headerSubmenuOpen) {
        headerSubmenu.classList.add('show');
        headerSubmenuOpen = true;
    } else {
        headerSubmenu.classList.remove('show');
        headerSubmenuOpen = false;
    }
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.header-menu__arrLink')) {
        headerSubmenu.classList.remove('show');
        headerSubmenuOpen = false;
    }
});