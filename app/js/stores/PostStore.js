var alt = require('../../alt');
var PostActions = require('../actions/PostActions');
var LocationStore = require('./LocationStore');

class PostStore {
  constructor() {
    this.posts = [];
    this.highlightedPost = {};

    this.bindListeners({
      handleUpdatePosts: PostActions.UPDATE_POSTS,
      handleGetPosts: PostActions.GET_POSTS,
      handleHighlightPost: PostActions.HIGHLIGHT_POST,
      handleUnHighlightPost: PostActions.UNHIGHLIGHT_POST
    });
  }

  handleUpdatePosts(posts) {
    this.posts = posts;
  }

  handleGetPosts(location) {
    // Reset for spinner purposes
    this.posts = [];
  }
  
  handleHighlightPost(post) {
    console.log('Post highlighted', post);
    this.highlightedPost = post;
  }
  
  handleUnHighlightPost() {
    this.highlightedPost = {};
  }

}

module.exports = alt.createStore(PostStore, 'PostStore');