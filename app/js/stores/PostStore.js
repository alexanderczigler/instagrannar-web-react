var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _posts = [];

var PostStore = assign({}, EventEmitter.prototype, {

  getAll: function (url) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.onload = function() {
      var result = JSON.parse(xhr.responseText);
      _posts = result.data;
      return result.data;
    }.bind(this);
    xhr.send();
  }

});

module.exports = PostStore;