let swiper = new Swiper(".reviewsSwiper", {
    loop: true,
    spaceBetween: 50,
    navigation: {
        nextEl: ".reviews-button-next",
        prevEl: ".reviews-button-prev",
    },

    // breakpoints: {
    //     640: {
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //     },
    //     768: {
    //         slidesPerView: 4,
    //         spaceBetween: 40,
    //     },
    //     1024: {
    //         slidesPerView: 5,
    //         spaceBetween: 50,
    //     },
    // },
});

let swiper2 = new Swiper(".mastersSwiper", {
    loop: true,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
    },
});


// accardion
const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));
// accardion

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

let reviewSwp = new Swiper('.review .swiper', {
    slidesPerView: 1,
    spaceBetween: 100,
    initialSlide: 1,
    loop: true,
    speed: 300,
    breakpoints: {
        992: {
            slidesPerView: 2,
            spaceBetween: 73,
        }
    },
    navigation: {
        nextEl: '.review__swp_btn__next',
        prevEl: '.review__swp_btn__prev',
    },
})