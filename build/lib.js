'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var arr = exports.arr = ['hello', 2, { cool: 'crazy' }, 4, 'Test'];

var obj = exports.obj = {
  a: 'b',
  c: 'd'
};

var nothing = exports.nothing = 'test';

var func = exports.func = function func() {
  return console.log('Totally worked');
};

// {
//   arr: ['hello', 2, { cool: 'crazy' }, 4, 'Test'],
//   obj: { a: 'b', c: 'd' }
// nothing: 'test'
// }