var request = require('request');

function Requester (options) {
  this.options = options;
}

Requester.prototype.neu = function (cb) {
  this.options.neu = true;
  if (cb) {
    this.exec(cb);
  }
  return this;
}

Requester.prototype.controversial = function (cb) {
  this.options.controversial = true;
  if (cb) {
    this.exec(cb);
  }
  return this;
}

Requester.prototype.top = function (cb) {
  this.options.top = true;
  if (cb) {
    this.exec(cb);
  }
  return this;
}

Requester.prototype.exec = function (cb) {
  var url = 'http://reddit.com/r/' + this.options.subreddit; 

  if (this.options.neu) {
    url += '/new';
  } else if (this.options.controversial) {
    url += '/controversial';
  } else if (this.options.top) {
    url += '/top';
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