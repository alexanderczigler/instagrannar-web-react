import React from 'react';
import global from '../global.sv.json';

export default class Header extends React.Component {
  render() {
    return (
		  <header className="header">
        <div className="header__overlay"></div>
        <h1 className="header__title">
          <a className="header__title-link" href="/">{global.brand}</a>
        </h1>
		  </header>
    );
  }
}