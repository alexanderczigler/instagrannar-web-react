var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var constants = require('../constants/PostConstants');

var _location = {};

var LocationStore = assign({}, EventEmitter.prototype, {
  getLocation: function () {
    return _location;
  },
  
  setLocation: function(location) {
    _location = location;
  },
  
  emitChange: function() {
    this.emit(constants.CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(constants.CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(constants.CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'setLocation':
      console.log('setLocation happening', action.location);
      LocationStore.setLocation(action.location);
      LocationStore.emitChange();
      break;
    default:
    // default
  }

  return true;
});

module.exports = LocationStore;