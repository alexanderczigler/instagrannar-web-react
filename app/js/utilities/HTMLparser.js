var HTMLparser = function (string) {
  var el = document.createElement( 'div' );
  el.innerHTML = string;
  return el.innerHTML;
}

module.exports = HTMLparser;