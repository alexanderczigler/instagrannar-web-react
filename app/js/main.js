/** @jsx React.DOM */

var React = require('react');
var Cat = require('./components/cat.jsx');

window.React = React; 

React.render(<Cat/>, document.body);