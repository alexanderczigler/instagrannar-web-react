var React = require('react');
var addons = require('react-addons');

module.exports = React.createClass({
  render: function () {
    var cx = addons.classSet;
    var classes = cx({
      'posts__post col-4': true,
      'posts__post--instagrannar': this.props.post.user.username === 'instagrannar'
    });

    var user = '@' + this.props.post.user.username;
    var image = this.props.post.user.username !== 'instagrannar' ? this.props.post.images.low_resolution.url : '';

    return (
      <div className={classes} data-user={user}>
        <img className="posts__image" src={image} />
      </div>
    );
  }
});