'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView,
  ListView,
  Image,
  Navigator,
  TabBarIOS,
  NavigatorIOS
} = React;

var TabBarItemIOS = TabBarIOS.Item;

var API_URL = 'http://instagrannar.se:3000/pictures?lng={lng}&lat={lat}&dst=350&max_ts=&min_ts=/-';
var lng = 18.05935107885739;
var lat = 59.33640477604537;

API_URL = API_URL.replace('{lng}', lng);
API_URL = API_URL.replace('{lat}', lat);

var Instagrannar = React.createClass({
  
  getInitialState: function() {
    return {
      selectedTab: 'mapTab',
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },
  
  componentDidMount: function() {
    this.fetchData();
  },
  
  fetchData: function() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.data),
          loaded: true,
        });
      })
      .done();
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarItemIOS name='mapTab' title='Karta' icon={{}} selected={this.state.selectedTab === 'mapTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'mapTab',
            });
          }}>
        {this.renderMap()}
        </TabBarItemIOS>
        <TabBarItemIOS name='pictureTab' title='Bilder' icon={{}} selected={this.state.selectedTab === 'pictureTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'pictureTab',
            });
          }}>
        {this.renderPictureList()}
        </TabBarItemIOS>
        <TabBarItemIOS name='profileTab' title='Profil' icon={{}} selected={this.state.selectedTab === 'profileTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'profileTab',
            });
          }}>
        </TabBarItemIOS>
      </TabBarIOS>
    );
  },

  renderMap: function() {
    var region = {
      latitude: 59.33389,
      longitude: 18.056288,
      latitudeDelta: 1,
      longitudeDelta: 1
    };
    return (
      <MapView style={styles.container} showsUserLocation="true" />
    );
  },
    
  renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text>
          Instagrannar
        </Text>
      </View>
    );
  },
    
  renderPictureList: function () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderPicture}
        style={styles.listView}
      />
    );
  },

  renderPicture: function(picture) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: picture.images.thumbnail.url}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>@{picture.user.username}</Text>
          <Text style={styles.year}>Filter: {picture.filter}</Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('Instagrannar', () => Instagrannar);