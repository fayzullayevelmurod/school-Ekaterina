let menu = document.querySelector('.menu'),
    menuOpen = document.querySelector('.header__bars'),
    menuClose = document.querySelector('.menu__close');

menuOpen.onclick = () => {
    menu.classList.add('active')
}

menuClose.onclick = () => {
    menu.classList.remove('active');
    menu.classList.add('end-active');

    setTimeout(() => {
        menu.classList.remove('end-active');
    }, 400);
}

let tabHead = document.querySelectorAll('.information .tab_head button'),
    tabItem = document.querySelectorAll('.information .tab_item');

tabHead.forEach((btn, btnID) => {
    btn.onclick = () => {
        tabHead.forEach(el => {
            if (el == btn) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        })

        tabItem.forEach((el, idx) => {
            if (idx == btnID) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        })
    }
})