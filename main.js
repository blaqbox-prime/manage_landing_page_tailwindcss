$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    dots: true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items: 3
        }
    }
})

const menuBtn = document.getElementById('menu-btn');
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu'); 

// Switch between hamburger and close Icon
menuBtn.addEventListener('click', () => {
    if(menuBtn.classList.contains('open')) {
        menuIcon.setAttribute('src','./images/icon-hamburger.svg');
        menuBtn.classList.toggle('open');
        menu.classList.toggle('hidden');
    } else {
        menuBtn.classList.toggle('open');
        menuIcon.setAttribute('src','./images/icon-close.svg');
        menu.classList.toggle('hidden');
    }
})