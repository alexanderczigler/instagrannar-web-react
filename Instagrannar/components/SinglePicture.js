var React = require('react-native');
var Hashtag = require('./Hashtag');

var {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} = React;

module.exports = React.createClass({
  render: function () {
    var picture = this.props;

    var tags = picture.tags.map(function (tag, i) {
      return <Hashtag key={i} tag={tag} />;
    });

    var caption = picture.caption ? picture.caption.text : '';
console.log('this', this);
    return (
      <ScrollView style={styles.singlePicture}>
        <Image
            source={{uri: picture.images.standard_resolution.url}}
            style={styles.picture} />
        <View style={styles.content}>
          <Text style={styles.username}>@{picture.user.username}</Text>
          <Text style={styles.text}>{caption}</Text>
          <View style={styles.hashtags}>
            {tags}
          </View>
        </View>
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  singlePicture: {
    backgroundColor: '#ffffff',
    flex: 1,
    marginTop: 20,
  },
  content: {
    padding: 20
  },
  username: {
    color: '#666666',
    marginBottom: 20
  },
  picture: {
    width: 320,
    height: 320,
  },
  hashtags: {
    marginTop: 10
  }
});