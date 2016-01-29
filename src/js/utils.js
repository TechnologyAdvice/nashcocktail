var NASHCOCKTAIL_EVENT_FALLBACK_URL = 'http://www.eventbrite.com/o/technologyadvice-8632648480';
var NASHCOCKTAIL_SPACE_ID = 'mgvhfvj4jv6c';

contentfulClient.spaces.getEntries(NASHCOCKTAIL_SPACE_ID)
  .done(function(res) {
    var eventEntry;
    if (res.items.length > 0) {
      eventEntry = res.items[0];
      updateRegistrationLinks(eventEntry.fields.eventLink);
      updateAboutFeaturedCompany(eventEntry.fields.aboutEventSponsor);
      updateEventDate(eventEntry.fields.eventStartTime);
      retrieveSponsorLogo(NASHCOCKTAIL_SPACE_ID, eventEntry.fields.eventSponsorLogo.sys.id);
      updateDrinkSponsor(eventEntry.fields.eventDrinkSponsorCompanyName);
      updateAboutDrinkSponsor(eventEntry.fields.eventDrinkSponsorCompanyAbout);
      retrieveDrinkSponsorLogo(NASHCOCKTAIL_SPACE_ID, eventEntry.fields.eventDrinkSponsorCompanyLogo.sys.id);
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
  var formattedDate = moment(new Date(startDate)).format('MMMM D, YYYY');
  $('#event-title').empty().append(formattedDate);
}

function retrieveSponsorLogo(spaceId, assetId) {
  contentfulClient.spaces.getSingleAsset(spaceId, assetId)
    .done(function(res) {
      $('#featured-company-logo').attr('src', res.fields.file.url).attr('alt', res.fields.title);
    });
}

// Drink sponsor logic
function updateAboutDrinkSponsor(content) {
  $('#about-drink-sponsor').empty().append(content);
}

function updateDrinkSponsor(content) {
  $('#drink-sponsor-name').empty().append(content);
}

function retrieveDrinkSponsorLogo(spaceId, assetId) {
  contentfulClient.spaces.getSingleAsset(spaceId, assetId)
    .done(function(res) {
      $('#featured-drink-logo').attr('src', res.fields.file.url).attr('alt', res.fields.title);
    });
}
