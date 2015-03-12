import React from 'react';
import Post from './post';
import Loader from './loader';
import PostStore from '../stores/PostStore';
import LocationsActions from '../actions/LocationActions';
import AdvertisementStore from '../stores/AdvertisementStore';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allPosts: []
    };

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    LocationsActions.getByLocation('usersPosition');
  }

  componentDidMount() {
    PostStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    PostStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({
      allPosts: PostStore.getAll(),
      isLoaded: true
    });
  }

  render() {
    var p = this.state.allPosts;
    p.splice(AdvertisementStore.randomPosition(p.length), 0, AdvertisementStore.get());
    
    var posts = p.map((post, i) => <Post key={i} post={post}></Post>);
    
    return (
      <div className="posts__wrapper">
        {this.state.isLoaded ? <div className="posts">{posts}</div> : <Loader />}
      </div>
    );
  }
}