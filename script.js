const swiper = new Swiper('.popular-slider', {
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  let contacts = document.querySelector('#contacts');
  let info = document.querySelector('.info');
  contacts.addEventListener('click', e => {
    info.scrollIntoView({ 
      behavior: 'smooth',
    });
  });
let offers = document.querySelector('#offers');
let swipe = document.querySelector('.popular_container');
offers.addEventListener('click', e => {
  swipe.scrollIntoView({ 
    behavior: 'smooth',
  });
});
let us = document.querySelector('#us');
let about = document.querySelector('.about');
us.addEventListener('click', e => {
  about.scrollIntoView({ 
    behavior: 'smooth',
  });
});
