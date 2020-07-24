'use strict';

const menuBtn = document.querySelector('.nav-burger'),
    headerArrow = document.querySelector('.header-menu__arrLink'),
    headerSubmenu = document.querySelector('.header-submenu'),
    videoSection = document.querySelector('.video'),
    videoBtn = document.querySelector('.videoBtn'),
    videoScreen = document.querySelector('.video-screen'),
    previewBox = document.querySelector('.preview');

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

videoBtn.addEventListener('click', () => {
    videoScreen.play();
    previewBox.style.display = 'none';
    videoScreen.style.display = 'block';
    videoScreen.style.opacity = '1';
    videoSection.style.backgroundColor = '#0f151f';
});

videoScreen.addEventListener('click', () => {
    if (!videoScreen.paused) {
        videoScreen.pause();
        previewBox.style.display = 'block';
        videoScreen.style.opacity = '.3';

    }

});