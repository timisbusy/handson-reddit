var request = require('request');

function r (subname, cb) {
  request.get('http://reddit.com/r/' + subname + '.json', cb);
}


module.exports = {
  r: r
};