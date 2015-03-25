var alt = require('../../alt');
var LocationActions = require('../actions/LocationActions');

class LocationStore {
  constructor() {
    this.location = {
      latitude: 59.33389,
      longitude: 18.056288
    };

    this.bindListeners({
      handleGetLocation: LocationActions.GET_LOCATION,
      handleSetLocation: LocationActions.SET_LOCATION
    });
  }

  handleGetLocation(location) {
    return this.location;
  }

  handleSetLocation(location) {
    this.location = location;
  }
}

module.exports = alt.createStore(LocationStore, 'LocationStore');