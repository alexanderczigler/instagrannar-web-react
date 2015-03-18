import React from 'react';

export default class Loader extends React.Component {
  render() {
    return (
      <div className="loader__wrapper">
        <div className="loader"></div>
      </div>
    );
  }
}