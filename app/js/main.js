/** @jsx React.DOM */

var React = require('react');
<<<<<<< HEAD
var Instagrannar = require('./components/instagrannar.jsx');

window.React = React; 

React.render(<Instagrannar/>, document.body);
=======
var Posts = require('./components/posts');

window.React = React; 

React.render(<Posts url="http://localhost:3000/pictures/18.07277796549827/59.33369110415745/350/-"/>, document.body);
>>>>>>> 2fd62b1f68cce7e8996744ee637bd3c5633a6229
