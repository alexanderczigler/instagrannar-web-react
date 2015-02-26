/** @jsx React.DOM */

var React = require('react');
var PostStore = require('../stores/PostStore');
var LocationActions = require('../actions/LocationActions');

module.exports = React.createClass({
  getDefaultProps: function () {
      return {
          initialZoom: 8,
          mapCenterLat: 43.6425569,
          mapCenterLng: -79.4073126,
      };
  },
  componentDidMount: function (rootNode) {
      var mapOptions = {
          center: this.mapCenterLatLng(),
          zoom: this.props.initialZoom
      },
      map = new google.maps.Map(this.getDOMNode(), mapOptions);
      var marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: map});
      this.setState({map: map});

      var mapChange = function () {
        var ll = map.getCenter();
        LocationActions.getByLocation({
          longitude: ll.lng(),
          latitude: ll.lat()
        });
      };

      google.maps.event.addListener(map, 'dragend', mapChange);
      google.maps.event.addListener(map, 'tilesloaded', mapChange);
      google.maps.event.addListener(map, 'zoom_changed', mapChange);
  },
  mapCenterLatLng: function () {
      var props = this.props;
      return new google.maps.LatLng(props.mapCenterLat, props.mapCenterLng);
  },
  render: function () {
      return (
        <div className='instagrannar-map'></div>
      );
  }
});
