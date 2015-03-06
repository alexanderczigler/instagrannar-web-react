var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter  = require('events').EventEmitter;
var assign        = require('object-assign');
var constants     = require('../constants/PostConstants');
var q             = require('q');

var _posts = [];

function update (url) {
  var deferred = q.defer();

  var xhr = new XMLHttpRequest();
  xhr.open('get', url, true);
  xhr.onload = function() {
    var result = JSON.parse(xhr.responseText);
    deferred.resolve(result.data);
  };
  xhr.send();

  return deferred.promise;
}

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
      var url = constants.BASE_URL + '?lng={lng}&lat={lat}&dst=250&max_ts=&min_ts=/-"';
      url = url
        .replace('{lng}', action.location.longitude)
        .replace('{lat}',action.location.latitude);

      update(url).then(function (data) {
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