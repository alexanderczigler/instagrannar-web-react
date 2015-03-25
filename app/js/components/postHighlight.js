var React = require('react');
var PostActions = require('../actions/PostActions');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      id: '',
      imageUrl: ''
    };
  },

  componentDidMount: function () {
    //LocationStore.listen(this._centerMap);
  },

  componentWillUnmount: function () {
    //LocationStore.unlisten(this._centerMap);
  },

  render: function () {
    return (
      <div>
        <img src={this.props.imageUrl} />
      </div>
    );
  }
});
