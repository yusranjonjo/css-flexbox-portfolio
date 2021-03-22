const barsMenu = document.querySelector('.bars-menu');
const navbar = document.querySelector('.navbar');
const daftarMenu = document.querySelector('.daftar-menu');
const header = document.querySelector('.header');

const a = document.querySelectorAll('.navbar ul li a');
const iconBars = document.querySelector('.navbar .bars-menu i');

const li = document.querySelectorAll('.navbar ul li');

li.forEach(function (el) {
    el.addEventListener('click', function () {
        let dm = daftarMenu;
        let ib = iconBars;
        dm.classList.toggle('menus');
        dm.classList.toggle('daftar-menu');
        ib.classList.toggle('fa-times');
        dm.classList.toggle('menus');
    })
});


barsMenu.addEventListener('click', btnShowMenu);

function btnShowMenu() {

    for (let i = 0; i < li.length; i++) {
        li[i].classList.add('li-menu');
    }

    for (let i = 0; i < a.length; i++) {
        a[i].classList.add('a-menu');
        console.log(a[i]);
    }
    daftarMenu.classList.toggle('daftar-menu');
    daftarMenu.classList.add('menus');
    iconBars.classList.toggle('fa-times');

    barsMenu.innerHTML = '<i class="fas fa-times"></i>';
}