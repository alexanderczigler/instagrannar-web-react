var React = require('react');
var addons = require('react-addons');

module.exports = React.createClass({
  render: function () {
    var username = this.props.post.user.username;
    var image = this.props.post.images.low_resolution.url;

    var cx = addons.classSet;
    var classes = cx({
      'posts__post col-4': true,
      'posts__post--instagrannar': username === 'instagrannar'
    });

    var user = '@' + username;
    var image = username !== 'instagrannar' ? image : '';

    return (
      <div className={classes} data-user={user}>
        <img className="posts__image" src={image} />
      </div>
    );
  }
});