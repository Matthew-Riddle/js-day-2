import { arr, obj, nothing } from './lib.js'
import _ from 'underscore'

console.log(nothing)

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

for (let value of arr) {
  console.log(value)
  if (value === 'hello') {
    break
  }
}

for (let key in obj) {
  console.log(obj[key])
}

for (let value of Object.entries(obj)) {
  console.log(value)
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
