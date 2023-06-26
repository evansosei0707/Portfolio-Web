const humburger = document.querySelector(' .header .humburger')
const menuListItem = document.querySelectorAll('.header .nav-list ul li a');
const menuList = document.querySelector('.header .nav-list ul');
const header = document.querySelector('.header');



menuListItem.forEach((value) => {
    let vanishMenuBar = false;
    value.addEventListener('click',() => {
        if (!vanishMenuBar) {
        menuList.classList.add('vanish');
        vanishMenuBar = true;
        } else {
            menuList.classList.remove('vanish');
            vanishMenuBar =false;
        }
    })
});

document.addEventListener('scroll', () => {
    const scroll_reveal = window.scrollY;
    if (scroll_reveal > 250) {
        header.style.backgroundColor = '#262636';
    } else {
        header.style.backgroundColor = 'transparent';
    }
})