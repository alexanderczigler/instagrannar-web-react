var AppDispatcher = require('../dispatcher/AppDispatcher');

function getUsersLocation () {
  return new Promise(function (resolve, reject) {
    console.log('get loc');
    setTimeout(function () {
      navigator.geolocation.getCurrentPosition(function (data) {
        var coords = data.coords;
        console.log('get loc 2');
        resolve({
          longitude: coords.longitude,
          latitude: coords.latitude
        });
      });
    }, 1000);
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
      console.log(location);
      AppDispatcher.dispatch({
        actionType: 'getByLocation',
        location: location
      });
    }
  },

  setLocation: function (location) {
    AppDispatcher.dispatch({
      actionType: 'setLocation',
      location: location
    });
  }
};

module.exports = LocationsActions;