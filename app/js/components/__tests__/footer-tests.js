jest.dontMock('../footer.js');

var React     = require('react/addons');
var Footer    = require('../footer.js');
var TestUtils = React.addons.TestUtils;

describe('Footer', function() {
  var FooterElement = TestUtils.renderIntoDocument(<Footer />);

  var footer = TestUtils.findRenderedDOMComponentWithClass(FooterElement, 'footer');

  it('should render', function() {
    expect(footer).toBeDefined();
  });
});