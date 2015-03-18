var React = require('react');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var _autoComplete = {};
var LocationSearch = React.createClass({
  componentDidMount: function() {
    var input = document.getElementById('searchTextField');
    var options = {};
    _autoComplete = new google.maps.places.Autocomplete(input, options);
  },
  buttonClick: function() {
    //alert(this.refs.searchField.getDOMNode().value);
    var place = _autoComplete.getPlace();
    if (!place.geometry) {
      return;
    }
    AppDispatcher.dispatch({
      actionType: 'setLocation',
      location: {
        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng(),
        zoomLevel: 14
      }
    });
  },
  render: function() {
    return (
      <div>     
        <input ref='searchField' id="searchTextField" type="text" size="50" placeholder="Hitta plats" /> 
        <button onClick={this.buttonClick}>Sök</button>
      </div>
    );
  }
});

module.exports = LocationSearch;
