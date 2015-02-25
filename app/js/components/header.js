/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
		  <header className="banner" role="banner">
		    <div className="container">
		      <div className="row">
		        <div className="col-lg-12">
		          <div className="site-title">
		            <a className="brand" href="/">Instagrannar</a>
		          </div>
		        </div>
		      </div>
		    </div>
		  </header>
		</div>
    );
  }
});