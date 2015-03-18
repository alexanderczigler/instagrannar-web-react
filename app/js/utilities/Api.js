var Api = {
  core: function (method, url) {
    return new Promise(function (resolve, reject) {
      var client = new XMLHttpRequest();
      client.open(method, url, true);

      client.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            var result = JSON.parse(client.responseText);
            resolve(result.data);
          } else {
            reject({ error: this.statusText });
          }
        }
      };

      client.send();
    });
  },

  get: function (url) {
    return Api.core('get', url);
  }
};

module.exports = Api;