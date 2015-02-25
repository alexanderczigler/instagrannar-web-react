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
        <Posts url="http://instagrannar.se:3000/pictures?lng=18.119175068725554&lat=59.33500399999999&dst=350&max_ts=&min_ts=/-"/>
        <Footer />
      </div>
    );
  }
});
