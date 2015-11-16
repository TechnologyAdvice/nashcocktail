$(document).ready(initialize);

function initialize() {
  $('.about-link').on('click', clickAbout);
  $('.sponsor-link').on('click', clickSponsor);
}

function clickAbout(e) {
  e.preventDefault();
  $('html, body').animate({
      scrollTop: $('#about').offset().top
  }, 700);
  return false;
}

function clickSponsor(e) {
  e.preventDefault();
  $('html, body').animate({
      scrollTop: $('#become-a-sponsor').offset().top
  }, 700);
  return false;
}
