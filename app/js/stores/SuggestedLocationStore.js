var alt = require('../../alt');
var SuggestedLocationActions = require('../actions/SuggestedLocationActions');

class SuggestedLocationStore {
  constructor() {
    this.locations = [
      {
        name: 'New York, USA',
        latitude: 40.759011,
        longitude: -73.98447220000003,
        caption: "Spana in vad som händer på Broadway i New York!",
        zoomLevel: 9
      },
      {
        name: 'Lima, Peru',
        latitude: -12.065282135160288,
        longitude: -77.03122980147702,
        caption: "Spana in vad som händer i Lima!",
        zoomLevel: 14
      },
      {
        name: 'Bergen, Norway',
        latitude: 60.390703386113046,
        longitude: 5.326856156249975,
        caption: "Spana in vad som händer i Bergen!",
        zoomLevel: 7
      },
      {
        name: 'Muscat, Oman',
        latitude: 23.60598709072665,
        longitude: 58.54342796411129,
        caption: "Spana in vad som händer i Muscat!",
        zoomLevel: 12
      },
      {
        name: 'Lhasa, Tibet',
        latitude: 29.653609850935965,
        longitude: 91.13863603149413,
        caption: "Kolla in vad som händer i Lhasa!",
        zoomLevel: 14
      },
      {
        name: 'Pyongyang, North Korea',
        latitude: 39.018393856756084,
        longitude: 125.75217858825681,
        caption: "Spana in vad som händer i Pyongyang!",
        zoomLevel: 13
      },
      {
        name: 'Tomasina, Madagascar',
        latitude: -18.158071863003407,
        longitude: 49.40137483164062,
        caption: "Spana in vad som händer i Tomasina!",
        zoomLevel: 14
      },
      {
        name: 'San Diego, California',
        latitude: 32.715738,
        longitude: -117.16108380000003,
        caption: "Spana in vad som händer i San Diego!",
        zoomLevel: 14
      },
    ];
    this.previousLocation = -1;
    this.selectedPosition = {};

    this.bindListeners({
      handleGet: SuggestedLocationActions.GET
    });
  }

  handleGet() {
    var r = Math.random();
    var q = r * this.locations.length;
    var position = Math.floor(q);

    if (position === this.previousLocation) {
      return this.handleGet();
    }

    this.previousLocation = position;
    this.selectedPosition = this.locations[position];
  }
}

module.exports = alt.createStore(SuggestedLocationStore, 'SuggestedLocationStore');