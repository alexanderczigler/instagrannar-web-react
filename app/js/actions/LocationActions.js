var AppDispatcher = require('../dispatcher/AppDispatcher');

var LocationsActions = {
  getByLocation: function (location) {
    AppDispatcher.dispatch({
      actionType: 'getByLocation',
      location: location
    });
  }
};

module.exports = LocationsActions;