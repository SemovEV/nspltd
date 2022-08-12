burgerMenu.addEventListener('click', isNav);
arrowBack.addEventListener('click', isNav);

function isNav(){
    nav.classList.toggle('navigation_active');
}