/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="posts__post">
        <img src={this.props.post.images.thumbnail.url} />
      </div>
    );
  }
});