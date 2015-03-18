jest.dontMock('../post.js');
jest.dontMock('react-addons');

var React     = require('react/addons');
var Post      = require('../post.js');
var TestUtils = React.addons.TestUtils;

describe('Post', function() {
  describe('render Ad', function() {
    var element;
    var data;
    var post;

    beforeEach(function () {
      data = {
        user: {
          username: 'instagrannar'
        },
      };

      element = TestUtils.renderIntoDocument(<Post post={data} />);
      post = TestUtils.findRenderedDOMComponentWithClass(element, 'posts__post');
    });

    it('should render', function() {
      expect(TestUtils.isDOMComponent(post)).toBeTruthy();
    });

    it('should not set an image', function() {
      var image = TestUtils.findRenderedDOMComponentWithTag(post, 'img');
      expect(image.props.src).toEqual('');
    });

    it('should set an extra class name for ads', function() {
      expect(post.props.className.match(/posts__post--instagrannar/)).toBeTruthy();
    });
  });

  describe('render Post', function() {
    var element;
    var data;
    var post;

    beforeEach(function () {
      data = {
        user: {
          username: 'believer'
        },
        images: {
          low_resolution: {
            url: 'test.jpg'
          }
        }
      };

      element = TestUtils.renderIntoDocument(<Post post={data} />);
      post = TestUtils.findRenderedDOMComponentWithClass(element, 'posts__post');
    });

    it('should render', function() {
      expect(TestUtils.isDOMComponent(post)).toBeTruthy();
    });

    it('should not set an image', function() {
      var image = TestUtils.findRenderedDOMComponentWithTag(post, 'img');
      expect(image.props.src).toEqual('test.jpg');
    });

    it('should render the user name in data-user with an @', function() {
      expect(post.props['data-user']).toEqual('@believer');
    });
  });
});