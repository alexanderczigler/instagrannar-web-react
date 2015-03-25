var alt = require('../../alt');

class AdvertisementActions {
  get() {
    this.dispatch();
  }
}

module.exports = alt.createActions(AdvertisementActions);