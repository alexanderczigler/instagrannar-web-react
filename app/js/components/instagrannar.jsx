/** @jsx React.DOM */

var React = require('react');
var Header = require('./header.jsx');
var Map = require('./map.jsx');
var Footer = require('./footer.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <Map />
        <Footer />
      </div>
    );
  }
});
