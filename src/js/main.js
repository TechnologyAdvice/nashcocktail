$(document).ready(initialize);

function initialize() {
  $('a.navbar-right').on('click', scrollNav);
}

function scrollNav(e) {
  e.preventDefault();
  $('html, body').animate({
      scrollTop: $('#about').offset().top
  }, 1000);
  return false;
}

