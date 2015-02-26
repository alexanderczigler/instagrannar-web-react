var AppDispatcher = require('../dispatcher/AppDispatcher');

var LocationsActions = {
  setLocation: function (location) {
    console.log('action', location);
    AppDispatcher.dispatch({
      actionType: 'set',
      location: location.latitude
    });
  }
};

module.exports = LocationsActions;