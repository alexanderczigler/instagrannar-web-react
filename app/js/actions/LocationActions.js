var AppDispatcher = require('../dispatcher/AppDispatcher');

function getUsersLocation () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(function (data) {
      var coords = data.coords;

      resolve({
        longitude: coords.longitude,
        latitude: coords.latitude
      });
    });
  });
}

var LocationsActions = {
  getByLocation: function (location) {
    if (location === 'usersPosition') {
      getUsersLocation()
        .then(function (location) {
          AppDispatcher.dispatch({
            actionType: 'getByLocation',
            location: location
          });          
        })
    } else {
      AppDispatcher.dispatch({
        actionType: 'getByLocation',
        location: location
      });
    }
  }
};

module.exports = LocationsActions;