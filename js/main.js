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