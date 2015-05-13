var React = require('react');
var PostActions = require('../actions/PostActions');
var LocationActions = require('../actions/LocationActions');
var LocationStore = require('../stores/LocationStore');
var LocationSearch = require('./locationSearch');

var _googleMap = {};

module.exports = React.createClass({
  getInitialState: function () {
    return {
      initialZoom: 15,
      mapCenterLat: 59.33389,
      mapCenterLng: 18.056288
    };
  },

  componentDidMount: function () {
    LocationStore.listen(this._centerMap);

    var mapOptions = {
      center: this.mapCenterLatLng(),
      zoom: parseInt(this.props.initialZoom, 10),
      disableDefaultUI: true,
      streetViewControl: false,
      zoomControl: true,
      scrollwheel: false,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.RIGHT_BOTTOM
      }
    };

    _googleMap = new google.maps.Map(React.findDOMNode(this.refs.map), mapOptions);

    // Add autocomplete
    var autocomplete = this.refs.search.getDOMNode();

    _googleMap.controls[google.maps.ControlPosition.TOP_LEFT].push(autocomplete);

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

      LocationActions.setLocation({
        latitude: ll.lat(),
        longitude: ll.lng()
      });
    };

    google.maps.event.addListener(_googleMap, 'dragend', locationChange);
    google.maps.event.addListener(_googleMap, 'tilesloaded', mapChange);
    google.maps.event.addListener(_googleMap, 'zoom_changed', mapChange);
  },

  componentWillUnmount: function () {
    LocationStore.unlisten(this._centerMap);
  },

  _centerMap: function (store) {
    var location = store.location;
    var center = new google.maps.LatLng(location.latitude, location.longitude);
    _googleMap.panTo(center);
  },

  mapCenterLatLng: function () {
    var state = this.state;
    return new google.maps.LatLng(state.mapCenterLat, state.mapCenterLng);
  },

  render: function () {
    return (
      <div>
        <LocationSearch ref="search" map={_googleMap} />
        <div className="instagrannar-map" ref="map"></div>
      </div>
    );
  }
});
