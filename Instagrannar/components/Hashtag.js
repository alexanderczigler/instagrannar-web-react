var React = require('react-native');
var {
  Text,
  View,
} = React;

module.exports = React.createClass({
  render: function () {
    return (
      <Text>#{this.props.tag}</Text>
    );
  }
});