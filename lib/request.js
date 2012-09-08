var request = require('request');

function Requester (options) {
  this.options = options;
}

var filters = [ 'hot', 'new', 'controversial', 'top' ];

filters.forEach(function (filter) {
  Requester.prototype[filter] = function(cb) {
      this.options[filter] = true;
      if (cb) {
        this.exec(cb);
      }
      return this;
  };
});

Requester.prototype.exec = function (cb) {
  var url = 'http://reddit.com/r/' + this.options.subreddit; 
  
  for (var option in this.options) {
    if (this.options[option]) {
      url += '/' + option + '.json';
      request.get(url, cb);
      return;
    }
  }
  
  url += '.json';
  request.get(url, cb);
}

function r (subreddit, cb) {
  var requester = new Requester({ subreddit: subreddit });
  if (cb) {
    requester.exec(cb);
  }
  return requester;
}

module.exports = {
  r: r
};
