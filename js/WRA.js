var slideIndex = 1;
showSlides(slideIndex);

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    disableOnInteraction: false,
    delay: 5000,
  }
});

lightbox.option({
  'resizeDuration': 1500,
  'wrapAround': true
})