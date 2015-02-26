var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var q = require('q');

var _posts = [];

var BASE_URL = 'http://instagrannar.se:3000/pictures';
var CHANGE_EVENT = 'change';

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
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'getByLocation':
      var url = BASE_URL + '?lng={lng}&lat={lat}&dst=350&max_ts=&min_ts=/-"';
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