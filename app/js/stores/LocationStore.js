var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var LocationStore = assign({}, EventEmitter.prototype, {
  somthin: function () {}
});

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'set':
      console.log(action);
      break;
    default:
     // default
  }

  return true;
});

module.exports = LocationStore;