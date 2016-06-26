import React from 'react';
import global from '../global.sv.json';
import text from './sv.json';
import HTMLparser from '../../utilities/HTMLparser';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="row cf">
          <div className="col-4">
            <div className="copyright">
              {global.brand}<br/>
              {HTMLparser(text.copyright)}
            </div>
          </div>

          <div className="col-4">
            <a href="mailto:hej@instagrannar.se">{global.email}</a>
          </div>

          <div className="col-4">
            <a href="/#/annonsering">{text.advertising}</a>
          </div>

          <div className="col-4">
            <a href="/#/legal">{text.legal}</a>
          </div>
        </div>
      </footer>
    );
  }
}
