jest.dontMock('../header.js');

var React     = require('react/addons');
var Header    = require('../header.js');
var TestUtils = React.addons.TestUtils;

describe('Header', function() {
  var HeaderElement = TestUtils.renderIntoDocument(<Header />);

  var header = TestUtils.findRenderedDOMComponentWithClass(HeaderElement, 'header');

  it('should render', function() {
    expect(header).toBeDefined();
  });
});