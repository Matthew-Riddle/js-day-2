'use strict';

var _lib = require('./lib.js');

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_underscore2.default.filter([1, 2, 3, 4, 5], function (num) {
  return num > 3;
}));

console.log(_lib.nothing);

for (var i = 0; i < _lib.arr.length; i++) {
  console.log(_lib.arr[i]);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = _lib.arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var value = _step.value;

    console.log(value);
    if (value === 'hello') {
      break;
    }
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

for (var key in _lib.obj) {
  console.log(_lib.obj[key]);
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = Object.entries(_lib.obj)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _value = _step2.value;

    console.log(_value);
  }

  // const funcOuter = x => {
  //   const outer = 5
  //   const funcInner = () => {
  //     return (() => {
  //       return x + outer
  //     })()
  //   }
  //   return funcInner
  // }

  // const inner = funcOuter(10)

  // console.log(inner)

  // const templateString = `Result of inner: ${inner()} and the value of arr is: ${arr}`

  // console.log(templateString)
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}