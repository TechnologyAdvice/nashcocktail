$(document).ready(initialize);

function initialize() {
  $('.header-link').on('click', smoothScroll);
}

function smoothScroll() {
  $('html, body').animate({
      scrollTop: $(this.hash).offset().top
  }, 700);
  return false;
}
