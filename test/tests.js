require('mocha'),
require('should');

// for sanity check only

var request = require('superagent');

// for everything else

var Reddit = require('../index.js');
var reddit = new Reddit();

var REDDIT_USERNAME = process.env.REDDIT_USERNAME || 'test';
var REDDIT_PASSWORD = process.env.REDDIT_PASSWORD || 'test123';

console.log(REDDIT_USERNAME);

describe('sanity check', function () {
  it('gets r/funny', function (done) {
    request.get('http://reddit.com/r/funny', function (err, res) {
      if (err) { throw err; }
      done();
    });
  });
});

describe('gets a variety of subreddits', function () {
  it('gets r/funny', function (done) {
    reddit.r('funny', function (err, res) {
      if (err) { throw err; }
      done();
    });
  });
  it('gets r/funny', function (done) {
    reddit.r('funny', function (err, res) {
      if (err) { throw err; }
      done();
    });
  });
  it('gets r/random', function (done) {
    reddit.r('random', function (err, res) {
      if (err) { throw err; }
      done();
    });
  });
  it('gets r/politics', function (done) {
    reddit.r('politics', function (err, res) {
      if (err) { throw err; }
      done();
    });
  });
  it('gets r/IAmA', function (done) {
    reddit.r('IAmA', function (err, res) {
      if (err) { throw err; }
      done();
    });
  });
});

describe('can log in', function () {
  it('logs in with correct password', function (done) {
    reddit.login(REDDIT_USERNAME, REDDIT_PASSWORD, function (err, res) {
      if (err) { throw err; }
      done();
    });
  });
  it('gets login error with incorrect password', function (done) {
    reddit.login(REDDIT_USERNAME, '4567', function (err, res) {
      if (err) { throw err; }G
      done();
    });
  });
});

describe('can get information about loggedin user', function () {
  it('logs in and gets information', function (done) {
    reddit.login(REDDIT_USERNAME, REDDIT_PASSWORD, function (err, res) {
      if (err) { throw err; }
      reddit.me(function (err, res) {
        if (err) { throw err; }
        done();
      });
    });
  });
});