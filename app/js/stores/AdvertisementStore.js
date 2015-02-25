var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _ad = {
  id: 'ad',
  user: {
    username: 'instagrannar'
  },
  caption: {
    text: 'Vill du synas här? Hör av dig till oss för att veta mer om annonsering på Instagrannar!'
  },
  link: '/#/annonsering',
  target: 'same',
  images: {
    standard_resolution: {
      url: 'img/black.jpg'
    },
    thumbnail: {
      url: 'img/black.jpg'
    }
  }
};

var AdvertisementStore = assign({}, EventEmitter.prototype, {

  randomPosition: function (max) {
    var r = Math.random();
    var q = r * max;
    var position = Math.floor(q);
    return position;
  },
  get: function () {
    return _ad;
  }

});

module.exports = AdvertisementStore;