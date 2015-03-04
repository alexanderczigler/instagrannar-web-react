/** @jsx React.DOM */

var React                  = require('react');
var SuggestedLocationStore = require('../stores/SuggestedLocationStore');
var LocationActions        = require('../actions/LocationActions');
var PostStore              = require('../stores/PostStore');

module.exports = React.createClass({
  getByLocation: function (location) {
    LocationActions.getByLocation(location);
  },
  render: function () {
  	var location = SuggestedLocationStore.get();

    return (
      <div className="location">
        <a onClick={this.getByLocation.bind(this, location)}>
          Slut på idéer? Spana in vad som händer i {location.name}
        </a>
      </div>
    );
  }
});
