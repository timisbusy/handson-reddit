var request = require('superagent');

var arr = [];
var _obj = {
  r: r,
	_new: _new,
	exec : exec,
	controversial: controversial,
	top : top
};

function r (subreddit, cb) {
	if (cb) {
		request.get('http://reddit.com/r/' + subreddit + '.json', cb);
	} else {
		arr.push(subreddit);
		return _obj;
	}
}

function _new() {
	arr.push('new');
	return _obj;
}

function controversial() {
	arr.push('controversial');
	return _obj;
}

function top() {
	arr.push('top');
	return _obj;
}

function exec(cb) {
	var path = '';
	arr.forEach(function(item) {
		path += String(item) + '/';
	});

	request.get('http://reddit.com/r/' + path + '.json', cb);
}

module.exports = _obj;
