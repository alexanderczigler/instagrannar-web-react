var alt = require('../../alt');

class SuggestedLocationActions {
  get() {
    this.dispatch();
  }
}

module.exports = alt.createActions(SuggestedLocationActions);