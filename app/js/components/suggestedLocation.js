/** @jsx React.DOM */

var React = require('react');
var SuggestedLocationStore = require('../stores/SuggestedLocationStore');

module.exports = React.createClass({
  render: function () {
  	var location = SuggestedLocationStore.get();
    return (
      <div>
        {location.name}
      </div>
    );
  }
});
