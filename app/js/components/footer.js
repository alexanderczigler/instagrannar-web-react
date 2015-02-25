/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <footer className="footer">
        <div className="row cf">
          <div className="col-4">
            <div className="copyright">Instagrannar<br/>
              Copyright &copy;2014
            </div>
          </div>

          <div className="col-4">
            <a href="mailto:hej@instagrannar.se">hej@instagrannar.se</a>
          </div>

          <div className="col-4">
            <a href="/#/annonsering">Annonsering</a>
          </div>

          <div className="col-4">
            <a href="/#/legal">Juridisk info</a>
          </div>
        </div>
      </footer>
    );
  }
});
