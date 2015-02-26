var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var LocationStore = assign({}, EventEmitter.prototype, {
  items: [],
  somthin: function () {}
});

AppDispatcher.register(function (action) {
  console.log('store action', action);
  switch(action.actionType) {
    case 'set':
      console.log('store', action.location);
      break;
    defaut:
      console.log('default');
  }

  return true;
});

module.exports = LocationStore;