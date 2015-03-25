var alt = require('../../alt');
var PostActions = require('../actions/PostActions');

class PostStore {
  constructor() {
    this.posts = [];
    this.highlightedPost = {
      id: '',
      images: {
        standard_resolution: {
          url: ''
        }
      }
    };

    this.bindListeners({
      handleUpdatePosts: PostActions.UPDATE_POSTS,
      handleGetPosts: PostActions.GET_POSTS,
      handleHighlightPost: PostActions.HIGHLIGHT_POST,
      handleUnHighlightPost: PostActions.UN_HIGHLIGHT_POST
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
    this.highlightedPost = post;
  }
  
  handleUnHighlightPost() {
    this.highlightedPost = {};
  }

}

module.exports = alt.createStore(PostStore, 'PostStore');