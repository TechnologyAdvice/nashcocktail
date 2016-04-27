$(function() {


  // TODO: Move sections into separate files for better separation of concerns and pull in by page conditionally


  //
  // Smooth scroll
  // --------------------------------------------------
  function smoothScroll(el, to, duration) {
      if (duration < 0) {
          return;
      }
      var difference = to - $(window).scrollTop();
      var perTick = difference / duration * 10;
      $(this).scrollToTimerCache = setTimeout(function() {
          if (!isNaN(parseInt(perTick, 10))) {
              window.scrollTo(0, $(window).scrollTop() + perTick);
              smoothScroll(el, to, duration - 10);
          }
      }.bind(this), 10);
  }

  // Activate smooth scroll for Sponsor Sign Up link click event
  $('.sponsor-register-link').on('click', function(e) {
      e.preventDefault();
      smoothScroll($(window), $($(e.currentTarget).attr('href')).offset().top, 200);
  });

  //
  // Register as a Sponsor ActOn form validation
  // --------------------------------------------------
  $('#sponsorForm').isHappy({
    fields: {
      // keys are selectors, i.e. '[name=name]'
      '#sponsorContact': {
        required: true,
        message: 'Please provide a primary contact name.'
      },
      '#sponsorEmail': {
        required: true,
        message: 'Please provide a valid contact email.',
        test: function(val) {
          return /.+@.+\..+/.test(val);
        }
      },
      '#sponsorPhone': {
        required: true,
        message: 'Please enter a valid phone number (ex: 555-555-5555)',
        test: function(val) {
          return /\d{3}[\-]\d{3}[\-]\d{4}/.test(val);
        }
      },
      '#sponsorCompany': {
        required: true,
        message: 'Please provide company or affiliate name.'
      }
    }
  })
})




