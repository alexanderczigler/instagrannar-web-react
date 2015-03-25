var React = require('react');
var PostActions = require('../actions/PostActions');
var PostStore = require('../stores/PostStore');

var _url = '';

module.exports = React.createClass({
  getInitialState: function () {
    return {
      id: '',
      imageUrl: ''
    };
  },

  componentDidMount: function () {
    PostStore.listen(this._setHighlight);
  },
  
  _setHighlight: function (post) {
    if (post.highlightedPost.images.standard_resolution.url != undefined) {
      var newState = {
        imageUrl: post.highlightedPost.images.standard_resolution.url,
        id: post.highlightedPost.id
      };
      console.log('it is something all right', newState);
      _url = newState.imageUrl;
      this.setState(newState); // WHY WHY WHY is newState "null" or "undefined" here !?
    }
  },

  componentWillUnmount: function () {
    //LocationStore.unlisten(this._centerMap);
  },

  render: function () {
    return (
      <div className="highlight-post-container">
        <img src={_url} />
      </div>
    );
  }
});
