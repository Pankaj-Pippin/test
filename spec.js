var http = require('http');
var assert = require('assert');

var server = require('./index.js');

describe('HTTP Server Test', function() {
    // The function passed to before() is called before running the test cases.
    before(function() {
        server.listen(8080);
    });

    // The function passed to after() is called after running the test cases.
    after(function() {
        server.close();
    });

    describe('/', function() {
        it('should be Hello, Mocha!', function(done) {
            http.get('http://127.0.0.1:8080', function(response) {
                // Assert the status code.
                assert.equal(response.statusCode, 200);

                                var body = '';
                response.on('data', function(d) {
                    body += d;
                });
                response.on('end', function() {
                    // Let's wait until we read the response, and then assert the body
                    // is 'Hello, Mocha!'.
                    assert.equal(body, 'Hello World from CentOS6 in Docker');
                    done();
                });
            });
        });
    });
});