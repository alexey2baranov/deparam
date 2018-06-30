var $ = require('jquery')
var deparam = require('../src/deparam')

describe('deparam', function () {
  it('should deparam null without blowing up', function () {
    var expected = {};
    var result = deparam(null);
    expect(expected).eql(result);
  });

  it('should deparam empty string', function () {
    var expected = {};
    var result = deparam(decodeURIComponent($.param('')));
    expect(expected).eql(result);
  });

  it('should deparam obj', function () {
    var expected = { a:'1', b:'qwerty' };
    var result = deparam(decodeURIComponent($.param(expected)));
    expect(expected).eql(result);
  });

  it('should deparam obj with array property', function () {
    var expected = { a:['x', 'y'] };
    var result = deparam(decodeURIComponent($.param(expected)));
    expect(expected).eql(result);
  });

  it('should deparam obj with obj property', function () {
    var expected = { a: { b1:'x', b2:'y' } };
    var result = deparam(decodeURIComponent($.param(expected)));
    expect(expected).eql(result);
  });

  it('should deparam obj with obj with obj and arr property', function () {
    var expected = { o1: { o2: { s: "x", a:["a1", "a2"] } } };
    var result = deparam(decodeURIComponent($.param(expected)));
    expect(expected).eql(result);
  });
});
