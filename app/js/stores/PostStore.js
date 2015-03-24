var alt = require('../../alt');
var PostActions = require('../actions/PostActions');
var LocationStore = require('./LocationStore');

class PostStore {
  constructor() {
    this.posts = [];

    this.bindListeners({
      handleUpdatePosts: PostActions.UPDATE_POSTS,
      handleGetPosts: PostActions.GET_POSTS
    });
  }

  handleUpdatePosts(posts) {
    this.posts = posts;
  }

  handleGetPosts(location) {
    // Reset for spinner purposes
    this.posts = [];
  }

}

module.exports = alt.createStore(PostStore, 'PostStore');