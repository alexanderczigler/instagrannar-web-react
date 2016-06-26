import React from 'react';
import LocationStore from '../../stores/LocationStore';
import SuggestedLocationStore from '../../stores/SuggestedLocationStore';
import text from './sv.json';
var SuggestedLocationActions = require('../../actions/SuggestedLocationActions');
var LocationActions = require('../../actions/LocationActions');

module.exports = React.createClass({
  getStoreState: function () {
    return SuggestedLocationStore.getState();
  },

  getInitialState: function (props) {
    return this.getStoreState();
  },

  componentDidMount: function () {
    SuggestedLocationActions.get();
    LocationStore.listen(this._onChange);
  },

  componentWillUnmount: function () {  
    LocationStore.unlisten(this._onChange);
  },

  getNewLocation: function () {
    var location = this.state.selectedPosition;

    SuggestedLocationActions.get();

    LocationActions.setLocation({
      latitude: location.latitude,
      longitude: location.longitude
    });
  },

  _onChange: function () {
    this.setState(this.getStoreState());
  },

  render: function () {
    return (
      <div className="location">
        <a onClick={this.getNewLocation}>
           {text.noideas} {this.state.selectedPosition.name}
        </a>
      </div>
    );
  }
});
