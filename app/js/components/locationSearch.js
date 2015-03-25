var React = require('react');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var LocationActions = require('../actions/LocationActions');

var _autoComplete = {};
var LocationSearch = React.createClass({
  componentDidMount: function() {
    var self = this;
    var input = document.getElementById('searchTextField');
    var options = {};
    _autoComplete = new google.maps.places.Autocomplete(input, options);

    google.maps.event.addListener(_autoComplete, 'place_changed', function() {
      self.buttonClick();
    });
  },
  buttonClick: function() {
    var place = _autoComplete.getPlace();
    
    if (!place.geometry) {
      return;
    }

    LocationActions.setLocation({
      longitude: place.geometry.location.lng(),
      latitude: place.geometry.location.lat()
    });
  },
  render: function() {
    return (
      <div className="location-search" ref="locationSearch">     
        <input id="searchTextField" ref="searchField" className="input__text input--shadow" type="text" size="50" placeholder="Hitta plats" /> 
        <button className="button button--shadow" onClick={this.buttonClick}>Sök</button>
      </div>
    );
  }
});

module.exports = LocationSearch;
