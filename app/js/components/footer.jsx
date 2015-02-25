/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <footer class="content-info" role="contentinfo">
        <div class="container">
          <div class="row">
            <div class="col-sm-3">
              <div class="copyright">Instagrannar<br/>
                Copyright &copy;2014
              </div>
            </div>

            <section class="widget col-sm-3 text-2 widget_text">
              <h3 class="widget-title">Kontakt</h3>

              <div class="textwidget">
                <a href="mailto:hej@instagrannar.se">hej@instagrannar.se</a>
              </div>
            </section>

            <section class="widget col-sm-3 text-2 widget_text">
              <h3 class="widget-title">&nbsp;</h3>

              <div class="textwidget">
                <a href="/#/annonsering">Annonsering</a>
              </div>
            </section>

            <section class="widget col-sm-3 text-2 widget_text">
              <h3 class="widget-title">&nbsp;</h3>

              <div class="textwidget">
                <a href="/#/legal">Juridisk info</a>
              </div>
            </section>

          </div>
        </div>
      </footer>
    );
  }
});
