import React                  from 'react';
import SuggestedLocationStore from '../../stores/SuggestedLocationStore';
import LocationActions        from '../../actions/LocationActions';
import PostStore              from '../../stores/PostStore';

import AppDispatcher          from '../../dispatcher/AppDispatcher';
import LocationStore          from '../../stores/LocationStore';
import suggestedLocation      from './suggestedLocation.json';

export default class SuggestedLocation extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      location: SuggestedLocationStore.get()
    };

    this.getByLocation = this.getByLocation.bind(this);
  }

  getByLocation(location) {
    LocationActions.getByLocation(location);

    AppDispatcher.dispatch({
      actionType: 'setLocation',
      location: location
    });

    this.setState({
      location: SuggestedLocationStore.get()
    });
  }

  render() {
    return (
      <div className="location">
        <a onClick={this.getByLocation.bind(this, this.state.location)}>
           {suggestedLocation.noideas} {this.state.location.name}
        </a>
      </div>
    );
  }
}
