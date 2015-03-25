import React from 'react';
import Post from './post/post';
import Loader from './loader/loader';
import PostActions from '../actions/PostActions';
import PostStore from '../stores/PostStore';
import LocationActions from '../actions/LocationActions';
import LocationStore from '../stores/LocationStore';
import AdvertisementStore from '../stores/AdvertisementStore';
import SuggestedLocationStore from '../stores/SuggestedLocationStore';

module.exports = React.createClass({
  getStoreState: function () {
    return {
      posts: PostStore.getState().posts,
      advertisement: AdvertisementStore.getState().ad
    }
  },

  getInitialState: function () {
    return this.getStoreState();
  },

  randomPosition: function (max) {
    var r = Math.random();
    var q = r * max;
    var position = Math.floor(q);
    return position;
  },

  componentDidMount: function () {
    LocationStore.listen(this._changePosition);
    PostStore.listen(this._onChange);
    SuggestedLocationStore.listen(this._onChange);

    LocationActions.setLocation('usersPosition');
  },

  componentWillUnmount: function () {
    LocationStore.unlisten(this._changePosition);
    PostStore.unlisten(this._onChange);
    SuggestedLocationStore.unlisten(this._onChange);
  },

  _onChange: function () {
    console.log('_onChange',this);
    var newState = this.getStoreState();
    newState.isLoaded = true;

    this.setState(newState);
  },

  _changePosition: function (location) {
    PostActions.getPosts();
  },
  
  _onPostClick: function (post) {
    PostActions.highlightPost(post);
  },

  render: function () {
    var p = this.state.posts;
    p.splice(this.randomPosition(p.length), 0, this.state.advertisement);

    var posts = p.map((post, i) => <Post key={i} {...post} onPostClick={this._onPostClick.bind(this, post)}></Post>);
    
    return (
      <div className="posts__wrapper">
        {this.state.isLoaded ? <div className="posts">{posts}</div> : <Loader />}
      </div>
    );
  }
});