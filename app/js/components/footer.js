/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <footer className="content-info" role="contentinfo">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="copyright">Instagrannar<br/>
                Copyright &copy;2014
              </div>
            </div>

            <section className="widget col-sm-3 text-2 widget_text">
              <h3 className="widget-title">Kontakt</h3>

              <div className="textwidget">
                <a href="mailto:hej@instagrannar.se">hej@instagrannar.se</a>
              </div>
            </section>

            <section className="widget col-sm-3 text-2 widget_text">
              <h3 className="widget-title">&nbsp;</h3>

              <div className="textwidget">
                <a href="/#/annonsering">Annonsering</a>
              </div>
            </section>

            <section className="widget col-sm-3 text-2 widget_text">
              <h3 className="widget-title">&nbsp;</h3>

              <div className="textwidget">
                <a href="/#/legal">Juridisk info</a>
              </div>
            </section>

          </div>
        </div>
      </footer>
    );
  }
});
