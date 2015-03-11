var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

_location = {};

var LocationStore = assign({}, EventEmitter.prototype, {
  getLocation: function () {
    return _location;
  }
});

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'setLocation':
      console.log(action);
      break;
    default:
     // default
  }

  return true;
});

module.exports = LocationStore;