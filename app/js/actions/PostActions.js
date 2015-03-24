var alt = require('../../alt');
var Api = require('../utilities/Api');
var LocationStore = require('../stores/LocationStore');

class PostActions {
  updatePosts (posts) {
    this.dispatch(posts);
  }

  getPosts (location) {
    var location = LocationStore.getState().location;

    var BASE_URL = 'http://instagrannar.se:3000/pictures';
    var lat = location.latitude;
    var lng = location.longitude;
    var url = BASE_URL + `?lng=${lng}&lat=${lat}&dst=250&max_ts=&min_ts=/-"`;
    var self = this;

    Api
      .get(url)
      .then(function (posts) {
        self.actions.updatePosts(posts);
      })
      .catch(function (error) {
        self.actions.postsFailed(error);
      })
  }

  postsFailed (error) {
    this.dispatch(error);
  }
}

module.exports = alt.createActions(PostActions);