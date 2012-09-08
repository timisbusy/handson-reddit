var request = require('superagent');

var filters = [ 'hot', 'new', 'top', 'controversial' ];

var arr = [];
var _obj = {
  r: r,
	exec : exec
};

filters.forEach(function(filter) {
  _obj[filter] = function() {
    arr.push(filter);
    return _obj;
  };
});

function r (subreddit, cb) {
	if (cb) {
		request.get('http://reddit.com/r/' + subreddit + '.json', cb);
	} else {
		arr.push(subreddit);
		return _obj;
	}
}

function exec(cb) {
	var path = '';
	arr.forEach(function(item) {
		path += String(item) + '/';
	});

	request.get('http://reddit.com/r/' + path + '.json', cb);
}

module.exports = _obj;
