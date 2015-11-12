$(document).ready(initialize);

function initialize() {
  $('a.main-nav').on('click', clickShowNavMenu);
}

function clickShowNavMenu(e) {
  e.preventDefault();
  if($(window).width() < 768) {
    if($('ul.navbar-right').is(':hidden')) {
      $('ul.navbar-right').slideDown();
    } else {
      $('ul.navbar-right').slideUp();
    }
  }
}
