var request = require('request');

function Requester (subreddit) {
  this.subreddit = subreddit;
}

var filters = [ 'hot', 'new', 'controversial', 'top' ];

filters.forEach(function (filter) {
  Requester.prototype[filter] = function(cb) {
    if (this.filter) throw "Only one filter can be applied to the subreddit.";
    this.filter = filter;
    if (cb) {
      this.exec(cb);
    }
    return this;
  };
});

Requester.prototype.exec = function (cb) {
  var url = 'http://reddit.com/r/' + this.subreddit + '/' + this.filter + '.json'; 
  request.get(url, cb);
}

function r (subreddit, cb) {
  var requester = new Requester(subreddit);
  if (cb) {
    requester.exec(cb);
  }
  return requester;
}

module.exports = {
  r: r
};
