/** @jsx React.DOM */

var React = require('react');
var Header = require('./header');
var Map = require('./map');
var Footer = require('./footer');
var Posts = require('./posts');
var SuggestedLocation = require('./suggestedLocation');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <Map />
        <SuggestedLocation />
        <Posts />
        <Footer />
      </div>
    );
  }
});
