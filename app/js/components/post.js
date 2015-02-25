/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="posts__post">
        <img src={this.props.data.images.thumbnail.url} />
      </div>
    );
  }
});