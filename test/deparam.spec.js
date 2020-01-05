/**
 * Created by alexey2baranov on 8/26/16.
 */

const $ = require("jquery");
const deparam = require("../dist/deparam.umd.js");

describe('deparam', function () {
  it('should deparam obj', function () {
    const target = {a: "1", b: "qwerty"};
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
});
