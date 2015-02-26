/** @jsx React.DOM */

var React = require('react');
var SuggestedLocationStore = require('../stores/SuggestedLocationStore');
var LocationActions = require('../actions/LocationActions');

module.exports = React.createClass({
  setLocation: function (location) {
    console.log('component', location);
    LocationActions.setLocation(location);
  },
  render: function () {
  	var location = SuggestedLocationStore.get();

    return (
      <div className="location">
        <div onClick={this.setLocation.bind(this, location)}>{location.name}</div>
      </div>
    );
  }
});
