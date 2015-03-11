/** @jsx React.DOM */

var React = require('react');
var PostStore = require('../stores/PostStore');
var LocationActions = require('../actions/LocationActions');
var LocationStore = require('../stores/LocationStore');

_googleMap = {};

module.exports = React.createClass({
  getDefaultProps: function () {
    return {
      initialZoom: 15,
      mapCenterLat: 59.33389,
      mapCenterLng: 18.056288
    };
  },
  componentDidMount: function() {
    PostStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    PostStore.removeChangeListener(this._onChange);
    LocationStore.removeChangeListener(this._centerMap);
  },
  _onChange: function() {
    console.log('map onChange');
  },
  componentDidMount: function (rootNode) {
    
    LocationStore.addChangeListener(this._centerMap);
    
    var mapOptions = {
      center: this.mapCenterLatLng(),
      zoom: this.props.initialZoom
    };
    
    _googleMap = new google.maps.Map(this.getDOMNode(), mapOptions);
    var marker = new google.maps.Marker({
      position: this.mapCenterLatLng(),
      title: 'Hi',
      map: _googleMap
    });
    var ll;

    var mapChange = function () {
      ll = _googleMap.getCenter();
    };

    var locationChange = function () {
      mapChange();

      LocationActions.getByLocation({
        longitude: ll.lng(),
        latitude: ll.lat()
      });
    };

    google.maps.event.addListener(_googleMap, 'dragend', locationChange);
    google.maps.event.addListener(_googleMap, 'tilesloaded', mapChange);
    google.maps.event.addListener(_googleMap, 'zoom_changed', mapChange);
  },
  _centerMap: function() {
    var location = LocationStore.getLocation();
    var center = new google.maps.LatLng(location.latitude, location.longitude);
    _googleMap.panTo(center);
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
