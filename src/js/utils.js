var NASHCOCKTAIL_EVENT_FALLBACK_URL = 'http://www.eventbrite.com/o/technologyadvice-8632648480';

contentfulClient.spaces.getEntries('mgvhfvj4jv6c')
  .done(function( res ) {
    var eventEntry;
    if (res.items.length > 0) {
      eventEntry = res.items[0];
      updateRegistrationLinks(eventEntry.fields.eventLink);
      updateAboutFeaturedCompany(eventEntry.fields.aboutEventSponsor);
      updateEventDate(eventEntry.fields.eventStartTime);
    } else {
      updateRegistrationLinks(NASHCOCKTAIL_EVENT_FALLBACK_URL);
    }
  });

function updateRegistrationLinks(url) {
  var $registryLinks = $('.event-register-link');
  for (var i = 0; i <= $registryLinks.length; i++) {
    $($registryLinks[i]).attr('href', url);
  }
}

function updateAboutFeaturedCompany(content) {
  $('#about-featured-company').empty().append(content);
}

function updateEventDate(startDate) {
  var formattedDate = $.datepicker.formatDate('MM d, yy', new Date(startDate));
  $('#event-title').empty().append(formattedDate);
}
