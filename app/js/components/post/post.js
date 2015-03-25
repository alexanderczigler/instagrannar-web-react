import React from 'react';
import addons from 'react-addons';

module.exports = React.createClass({
  propTypes: {
    user: React.PropTypes.object,
    image: React.PropTypes.object,
    onPostClick: React.PropTypes.func.isRequired
  },

  render: function () {
    var username = this.props.user.username;
    var image = this.props.images.standard_resolution.url;

    var cx = addons.classSet;
    var classes = cx({
      'posts__post col-4': true,
      'posts__post--instagrannar': username === 'instagrannar'
    });

    var user = '@' + username;
    var image = username !== 'instagrannar' ? image : '';

    return (
      <div onClick={this.props.onPostClick} className={classes} data-user={user}>
          <img className="posts__image" src={image} />
      </div>
    );
  }
});
