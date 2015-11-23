contentfulClient.spaces.getEntries('mgvhfvj4jv6c')
  .done(function( res ) {
    console.log('done');
    var eventEntry;
    if (res.items.length > 0) {
      console.log(res.items);
      eventEntry = res.items[0];
      updateRegistrationLinks(eventEntry.fields.eventLink);
      updateAboutFeaturedCompany(eventEntry.fields.aboutEventSponsor);
      updateEventDate(eventEntry.fields.eventStartTime);
    } else {
      updateRegistrationLinks('http://www.eventbrite.com/o/technologyadvice-8632648480');
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

}
