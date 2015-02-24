/** @jsx React.DOM */

var React = require('react');
var Meow = require('./meow.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <div> The cat says <Meow /> </div>
    );
  }
});
