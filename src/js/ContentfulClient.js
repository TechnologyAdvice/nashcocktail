var CONTENTFUL_DELIVERY_ACCESS_TOKEN = 'd43bbf69661acd4230168e60c12f498f64ac3d36b55626dd45632ad513867d97';
var CONTENTFUL_ENDPOINT = 'https://cdn.contentful.com/';

var contentfulClient = {
  spaces: {
    getEntries: function(spaceId) {
      return $.ajax({
        method: "GET",
        url: CONTENTFUL_ENDPOINT + "spaces/" + spaceId + "/entries",
        data: {
          access_token: CONTENTFUL_DELIVERY_ACCESS_TOKEN
        }
      });
    },
    getSingleAsset: function (spaceId, assetId) {
      return $.ajax({
        method: "GET",
        url: CONTENTFUL_ENDPOINT + "spaces/" + spaceId + "/assets/" + assetId,
        data: {
          access_token: CONTENTFUL_DELIVERY_ACCESS_TOKEN
        }
      });
    }
  }
}
