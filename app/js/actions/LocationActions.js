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
  }, function (error) {
    // If any error, resolve with Stockholm
    deferred.resolve({
      longitude: 18.056288,
      latitude: 59.33389
    })
  });

  return deferred.promise;
}

var LocationsActions = {
  getByLocation: function (location) {
    if (!location) {
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