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
        <div onClick={this.getByLocation.bind(this, location)}>{location.name}</div>
      </div>
    );
  }
});
