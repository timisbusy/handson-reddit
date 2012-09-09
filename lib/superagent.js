var request = require('superagent');

var _filters = [ 'hot', 'new', 'controversial', 'top' ];

var _pathItems;
var _obj = {
  r: r,
  exec : exec
};

_filters.forEach(function(filter) {
  _obj[filter] = function() {
    if (_pathItems.filter) throw "Only one filter can be applied to the subreddit.";
    _pathItems.filter = filter;
    return _obj;
  };
});

function r (subreddit, cb) {
  _pathItems = {};
  if (cb) {
    request.get('http://reddit.com/r/' + subreddit + '.json', cb);
  } else {
    _pathItems.subreddit = subreddit;
    return _obj;
  }
}

function exec(cb) {
  var path = _pathItems.subreddit + '/' + _pathItems.filter + '/';
  request.get('http://reddit.com/r/' + path + '.json', cb);
}

module.exports = _obj;
