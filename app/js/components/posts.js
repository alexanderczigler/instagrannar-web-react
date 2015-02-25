/** @jsx React.DOM */

var React = require('react');
var Post = require('./post');
var PostStore = require('../stores/PostStore');
var AdvertisementStore = require('../stores/AdvertisementStore');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      allPosts: []
    }
  },
  componentWillMount: function () {
    var xhr = new XMLHttpRequest();
    xhr.open('get', this.props.url, true);
    xhr.onload = function() {
      var result = JSON.parse(xhr.responseText);
      this.setState({ allPosts: result.data });
    }.bind(this);
    xhr.send();
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
      <div className="posts cf">
        {posts}
      </div>
    );
  }
});