jest.dontMock('../loader.js');

var React     = require('react/addons');
var Loader    = require('../loader.js');
var TestUtils = React.addons.TestUtils;

describe('Loader', function() {
  var LoaderElement = TestUtils.renderIntoDocument(<Loader />);

  var loader = TestUtils.findRenderedDOMComponentWithClass(LoaderElement, 'loader');

  it('should render', function() {
    expect(loader).toBeDefined();
  });
});