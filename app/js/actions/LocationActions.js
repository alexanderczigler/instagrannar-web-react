var AppDispatcher = require('../dispatcher/AppDispatcher');
var q = require('q');

function getUsersLocation () {
  var deferred = q.defer();

  navigator.geolocation.getCurrentPosition(function (data) {
    var coords = data.coords;

    deferred.resolve({
      longitude: coords.longitude,
      latitude: coords.latitude
    });
  });

  return deferred.promise;
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