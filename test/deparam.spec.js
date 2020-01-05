/**
 * Created by alexey2baranov on 8/26/16.
 */

const $ = require("jquery");
const deparam = require("../dist/deparam.cjs.js");

describe('deparam', function () {
  it('should deparam obj', function () {
    const target = {a: "1", b: "qwerty"};
    const target2 = deparam(decodeURIComponent($.param(target)));

    expect(target2).eql(target);
  });

  it('should deparam empty string key', function () {
    const target = {'': '1'};
    const target2 = deparam(decodeURIComponent($.param(target)));

    expect(target2).eql(target);
  });

  it('should deparam obj with array property', function () {
    const target = {a: ["x", "y"]};
    const target2 = deparam(decodeURIComponent($.param(target)));

    expect(target2).eql(target);
  });

  it('should deparam obj with obj property', function () {
    const target = {a: {b1: "x", b2: "y"}};
    const target2 = deparam(decodeURIComponent($.param(target)));

    expect(target2).eql(target);
  });

  it('should deparam obj with obj with obj and arr property', function () {
    const target = {o1: {o2: {s: "x", a: ["a1", "a2"]}}};
    const target2 = deparam(decodeURIComponent($.param(target)));

    expect(target2).eql(target);
  });

  it('should deparam the empty string', function () {
    const target = {};
    const target2 = deparam(decodeURIComponent($.param(target)));

    expect(target2).eql(target);
  });

  describe('Recovering from poorly formed', function () {
    it('should coerce undefined and null', function () {
      const target = {a: undefined, b: null};
      const target2 = deparam(decodeURIComponent('a=undefined&b=null'), true);

      expect(target2).eql(target);
    });
    it('should deparam a bare name', function () {
      const name = 'someName';
      const target2 = deparam(decodeURIComponent(name));

      expect(target2).eql({someName: ''});
    });

    it('should deparam repeated params', function () {
      const expected = {a: ['1', '2', '3']};
      const args = 'a=1&a=2&a=3';
      const target2 = deparam(decodeURIComponent(args));

      expect(target2).eql(expected);
    });

    it('should deparam unescaped equal signs', function () {
      const expected = {a: '1=2'};
      const args = 'a=1=2';
      const target2 = deparam(args);

      expect(target2).eql(expected);
    });
  });

  describe('coercion', function () {
    it('should coerce numbers', function () {
      const target = {a: 1};
      const target2 = deparam(decodeURIComponent($.param(target)), true);

      expect(target2).eql(target);
    });
    it('should coerce booleans', function () {
      const target = {a: true, b: false};
      const target2 = deparam(decodeURIComponent($.param(target)), true);

      expect(target2).eql(target);
    });
    it('should allow coerce to work with strings', function () {
      const target = {a: 'test'};
      const target2 = deparam(decodeURIComponent($.param(target)), true);

      expect(target2).eql(target);
    });
    it('should allow coerce to work with a bare name', function () {
      const name = 'someName';
      const target2 = deparam(decodeURIComponent(name), true);

      expect(target2).eql({someName: undefined});
    });
  });
});
