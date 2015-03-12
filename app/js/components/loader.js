var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="loader__wrapper">
        <div className="loader"></div>
      </div>
    );
  }
});