var alt = require('../../alt');

function getUsersLocation () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      navigator.geolocation.getCurrentPosition(function (data) {
        var coords = data.coords;
        resolve({
          longitude: coords.longitude,
          latitude: coords.latitude
        });
      });
    }, 1000);
  });
}

class LocationsActions {
  getLocation () {
    this.dispatch();
  }

  setLocation (location) {
    var self = this;

    if (location === 'usersPosition') {
      getUsersLocation()
        .then(function (location) {
          self.dispatch(location);
        })
    } else {
      this.dispatch(location);
    }
  }
}

module.exports = alt.createActions(LocationsActions);
