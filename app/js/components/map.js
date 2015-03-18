var React = require('react');
var PostStore = require('../stores/PostStore');
var LocationActions = require('../actions/LocationActions');
var LocationStore = require('../stores/LocationStore');
var LocationSearch = require('./locationSearch');

var _googleMap = {};

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialZoom: 15,
      mapCenterLat: 59.33389,
      mapCenterLng: 18.056288
    };
  }

  componentDidMount() {
    PostStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    PostStore.removeChangeListener(this._onChange);
    LocationStore.removeChangeListener(this._centerMap);
  }

  _onChange() {
    console.log('map onChange');
  }

  componentDidMount(rootNode) {
    LocationStore.addChangeListener(this._centerMap);
    
    var mapOptions = {
      center: this.mapCenterLatLng(),
      zoom: parseInt(this.props.initialZoom, 10),
      disableDefaultUI: true,
      streetViewControl: false,
      zoomControl: true,
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

      LocationActions.getByLocation({
        longitude: ll.lng(),
        latitude: ll.lat()
      });
    };

    google.maps.event.addListener(_googleMap, 'dragend', locationChange);
    google.maps.event.addListener(_googleMap, 'tilesloaded', mapChange);
    google.maps.event.addListener(_googleMap, 'zoom_changed', mapChange);
  }

  _centerMap() {
    var location = LocationStore.getLocation();
    var center = new google.maps.LatLng(location.latitude, location.longitude);
    _googleMap.panTo(center);
  }

  mapCenterLatLng() {
    var state = this.state;
    return new google.maps.LatLng(state.mapCenterLat, state.mapCenterLng);
  }

  render() {
    return (
      <div>
        <LocationSearch ref="search" map={_googleMap} />
        <div className="instagrannar-map" ref="map"></div>
      </div>
    );
  }
};
