/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function () {
    var user = '@' + this.props.post.user.username;

    return (
      <div className="posts__post col-4" data-user={user}>
        <img className="posts__image" src={this.props.post.images.standard_resolution.url} />
      </div>
    );
  }
});