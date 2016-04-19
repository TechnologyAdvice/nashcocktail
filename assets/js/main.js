$(document).ready(initialize)

function initialize() {
  $('.header-link').on('click', smoothScroll)
  $('.sponsor-register-link').on('click', smoothScroll)
}

function smoothScroll(e) {
  e.preventDefault()
  $('html, body').animate({
      scrollTop: $(this.hash).offset().top
  }, 700)
  return false
}
