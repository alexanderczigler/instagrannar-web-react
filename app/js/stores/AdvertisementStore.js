var alt = require('../../alt');
var AdvertisementActions = require('../actions/AdvertisementActions');

class AdvertisementStore {
  constructor() {
    this.ad = {
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

    this.bindListeners({
      handleGetAd: AdvertisementActions.GET
    });
  }

  handleGetAd() {
    return this.ad;
  }

}

module.exports = alt.createStore(AdvertisementStore, 'AdvertisementStore');