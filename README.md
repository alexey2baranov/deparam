# deparam()

A `$.param()` reverse function without dependencies. Supports array-parameters and object-parameters with infinite nesting.
An extracted and refactored deparam method from Ben Alman's jQuery BBQ

## Tests

```js
  it('should deparam obj', function () {
    const target = {a: "1", b: "qwerty"};
    const target2 = deparam(decodeURIComponent($.param(target)));

    expect(target2).eql(target);
  })

  it('should deparam obj with array property', function () {
    const target = {a: ["x", "y"]};
    const target2 = deparam(decodeURIComponent($.param(target)));

    expect(target2).eql(target);
  })

  it('should deparam obj with obj property', function () {
    const target = {a: {b1: "x", b2: "y"}};
    const target2 = deparam(decodeURIComponent($.param(target)));

    expect(target2).eql(target);
  })

  it('should deparam obj with obj with obj and arr property', function () {
    const target = {o1: {o2: {s: "x", a: ["a1", "a2"]}}};
    const target2 = deparam(decodeURIComponent($.param(target)));

    expect(target2).eql(target);
  })
```

## Installation

> npm i deparam

## Usage

```js
const deparam = require("deparam");
const query = "a=1&b=qwerty";
const params = deparam(query); // params == {a:"1", b:"qwerty"}
```
