import React from 'react';
import addons from 'react-addons';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var username = this.props.user.username;
    var image = this.props.images.standard_resolution.url;

    var cx = addons.classSet;
    var classes = cx({
      'posts__post col-4': true,
      'posts__post--instagrannar': username === 'instagrannar'
    });

    var user = '@' + username;
    var image = username !== 'instagrannar' ? image : '';
    
    var onPostClick = this.props.onPostClick;
    var id = this.props.id;
    
    var postClick = function() {
      onPostClick(id);
    };
    
    return (
      <div onClick={postClick} className={classes} data-user={user}>
          <img className="posts__image" src={image} />
      </div>
    );
  }
}