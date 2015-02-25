/** @jsx React.DOM */

var React = require('react');
var Posts = require('./components/posts');

window.React = React; 

React.render(<Posts url="http://localhost:3000/pictures/18.07277796549827/59.33369110415745/350/-"/>, document.body);