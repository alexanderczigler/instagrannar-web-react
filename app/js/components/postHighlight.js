var React = require('react');
var PostActions = require('../actions/PostActions');
var PostStore = require('../stores/PostStore');

module.exports = React.createClass({
  getStoreState: function () {
    var highlighted = PostStore.getState().highlightedPost;
    var images = highlighted.images;
    return {
      id: highlighted.id,
      imageUrl: images.standard_resolution.url
    };
  },

  getInitialState: function () {
    return this.getStoreState();
  },

  componentDidMount: function () {
    PostStore.listen(this._setHighlight);
  },

  componentWillUnmount: function () {
    PostStore.unlisten(this._setHighlight);
  },
  
  _setHighlight: function (store) {
    this.setState(this.getStoreState());
  },

  reset: function () {
    PostActions.unHighlightPost();
    this.setState({
      id: false
    });
  },

  render: function () {
    if (!this.state) {
      return (
        <div />
      );
    }
    if (!this.state.id) {
      return (
        <div />
      );
    }
    return (
      <div className="highlighted-post-container" onClick={this.reset}>
        <img src={this.state.imageUrl} />
      </div>
    );
  }
});
