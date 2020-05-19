const body = document.querySelector('body');
const btOpen = document.getElementById('btn-open');
const closeMenu = document.querySelectorAll('[data-close="menu"]');
const btnFooter = document.querySelector('#footer button');

btOpen.addEventListener('click', e => {
    body.classList.add('open-menu');
})


closeMenu.forEach(el => {
    el.addEventListener('click', e => {
        body.classList.remove('open-menu');
    })
})