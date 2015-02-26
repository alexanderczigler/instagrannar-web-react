/** @jsx React.DOM */

var React = require('react');
var Post = require('./post');
var Loader = require('./loader');
var PostStore = require('../stores/PostStore');
var LocationsActions = require('../actions/LocationActions');
var AdvertisementStore = require('../stores/AdvertisementStore');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      allPosts: PostStore.getAll()
    };
  },

  componentWillMount: function () {
    LocationsActions.getByLocation({
      longitude: 18.056288,
      latitude: 59.33389
    });
  },

  componentDidMount: function() {
    PostStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    PostStore.removeChangeListener(this._onChange);
  },

  render: function () {
    var p = this.state.allPosts;
    p.splice(AdvertisementStore.randomPosition(p.length), 0, AdvertisementStore.get());
    var posts = p.map(function (post, i) {
      return (
        <Post key={i} post={post}></Post>
      );
    });
    
    return (
      <div className="posts__wrapper">
        {this.state.isLoaded ? <div className="posts">{posts}</div> : <Loader />}
      </div>
    );
  },

  _onChange: function() {
    this.setState({
      allPosts: PostStore.getAll(),
      isLoaded: true
    });
  }
});