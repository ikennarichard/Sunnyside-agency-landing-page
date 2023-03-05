// make menu-btn to show option navbar when clicked

const menuBtn = document.querySelector('#menu-btn');
const headerNav = document.querySelector('header nav');



menuBtn.addEventListener('click', () => {
    headerNav.classList.toggle('show');
})