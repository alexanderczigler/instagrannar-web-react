import React from 'react';
import Header from './header/header';
import Map from './map';
import Footer from './footer/footer';
import Posts from './posts';
import SuggestedLocation from './suggestedLocation/suggestedLocation';
import LocationSearch from './locationSearch';

export default class Instagrannar extends React.Component {
  render () {
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
}
