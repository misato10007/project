let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        header.classList.add('scrolling');
    } else {
        header.classList.remove('scrolling');
    }
});




// swiper

var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 3000,
    },
    speed: 400,
    spaceBetween: 100,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper = new Swiper(".mySwiperSmall", {
    autoplay: {
      delay: 3000,
    },
    slidesPerView: 3,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });


  // modal

  const buttons = document.querySelectorAll('button');
  const overlay = document.querySelector('.overlay');
  const modals  = document.querySelectorAll('.modal');
  const closes  = document.querySelectorAll('.close');

  for (let btn of buttons) {
    btn.addEventListener('click', (e) => {
        document.body.style.overflow = 'hidden';
        let dataModal = e.target.dataset.target;

        document.getElementById(`${dataModal}`).classList.add('modal--visible');

        overlay.classList.add('overlay--visible');
    })
  }

  overlay.addEventListener('click', (e) => {
    if (e.target == overlay) {
        document.body.style.overflow = '';

        overlay.classList.remove('overlay--visible');

        for (let modal of modals) {
            modal.classList.remove('modal--visible');
        }
    }
  })

  for (let close of closes) {
    close.addEventListener('click', (e) => {
        if (e.target == close || e.currentTarget) {
            document.body.style.overflow = '';

            overlay.classList.remove('overlay--visible');

            for (let modal of modals) {
                modal.classList.remove('modal--visiblevis');
            }
        }
    })
  }



  // mobile_menu

let burgerMenu = document.querySelector('.burger-menu');
let overlay2 = document.querySelector('.mobile_menu');
let body = document.querySelector('body');
let backDrop = document.querySelector('.header');

burgerMenu.addEventListener('click', (e) => {
    body.classList.toggle("overflow");
    e.currentTarget.classList.toggle("close");
    overlay2.classList.toggle("overlay2");
    
    backDrop.style.backdropFilter = backDrop.style.backdropFilter === 'unset' ? 'blur(5px)'
    : backDrop.style.backdropFilter = 'unset';

});