jest.dontMock('../SuggestedLocation.js');

var React     = require('react/addons');
var SuggestedLocation    = require('../SuggestedLocation.js');
var TestUtils = React.addons.TestUtils;

describe('Loader', function() {
  var element;
  var location;

  beforeEach(function () {
    element = TestUtils.renderIntoDocument(<SuggestedLocation />);

    location = TestUtils.findRenderedDOMComponentWithClass(element, 'location');
  });

  it('should render', function() {
    expect(location).toBeDefined();
  });

  it('should contain text', function() {
    var a = TestUtils.findRenderedDOMComponentWithTag(location, 'a');
    
    expect(a.getDOMNode().textContent).toMatch(/Slut på id\éer\? Spana in vad som h\änder i\s[a-zA-ZåäöÅÄÖ,\s]*/);
  });
});

