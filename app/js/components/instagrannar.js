var React = require('react');
var Header = require('./header/header');
var Map = require('./map');
var Footer = require('./footer/footer');
var Posts = require('./posts');
var SuggestedLocation = require('./suggestedLocation/suggestedLocation');
var LocationSearch = require('./locationSearch');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <Map initialZoom="14" />
        <SuggestedLocation />
        <LocationSearch />
        <Posts />
        <Footer />
      </div>
    );
  }
});
