import AppDispatcher from '../dispatcher/AppDispatcher';
import Events from 'events';
import assign from 'object-assign';
import constants from '../constants/PostConstants';
import Api from '../utilities/Api';

var EventEmitter = Events.EventEmitter;
var _posts = [];

var PostStore = assign({}, EventEmitter.prototype, {

  getAll: function (url) {
    return _posts;
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
    case 'getByLocation':
      var lat = action.location.latitude;
      var lng = action.location.longitude;
      var url = constants.BASE_URL + `?lng=${lng}&lat=${lat}&dst=250&max_ts=&min_ts=/-"`;

      Api.get(url).then(function (data) {
        _posts = data;
        PostStore.emitChange();
      });

      break;
    default:
     // default
  }

  return true;
});

module.exports = PostStore;