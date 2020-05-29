var activeMenu = document.querySelector('.menu-active');
var nav = document.querySelector('.main-nav')
var sections = document.getElementsByTagName('section');

function clickHandler(e) {
    if(activeMenu){
        activeMenu.classList.remove('menu-active');
    }
    e.target.classList.add('menu-active');
    activeMenu = e.target;
}

nav.addEventListener('click', clickHandler);

function switchPage(e) {
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.add('hidden');
    }
    document.querySelector(e.target.getAttribute('href')).classList.remove('hidden');
    console.log(e.target);
}
nav.addEventListener('click', switchPage);

