/** @jsx React.DOM */

var React                  = require('react');
var SuggestedLocationStore = require('../stores/SuggestedLocationStore');
var LocationActions        = require('../actions/LocationActions');
var PostStore              = require('../stores/PostStore');

var AppDispatcher          = require('../dispatcher/AppDispatcher');
var LocationStore          = require('../stores/LocationStore');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      location: SuggestedLocationStore.get()
    };
  },
  getByLocation: function (location) {
    LocationActions.getByLocation(location);
    AppDispatcher.dispatch({
      actionType: 'setLocation',
      location: location
    });
    this.setState({
      location: SuggestedLocationStore.get()
    });
  },
  render: function () {
  	return (
      <div className="location">
        <a onClick={this.getByLocation.bind(this, this.state.location)}>
          Slut på idéer? Spana in vad som händer i {this.state.location.name}
        </a>
      </div>
    );
  }
});
