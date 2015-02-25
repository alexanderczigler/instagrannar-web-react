/** @jsx React.DOM */

var React = require('react');
var Post = require('./post');
var PostStore = require('../stores/PostStore');

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
    var posts = this.state.allPosts.map(function (post, i) {
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