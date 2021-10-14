# useless.js
```js
let useless = require('@mp3e/useless.js')
console.log(useless.RandomInt(0,10))
console.log(useless.RandomInt(0,10))
console.log(useless.RandomInt(0,10))
console.log(useless.RandomInt(0,10))
```
its useless lol

# `RandomInt()`
##### Generates Numbers from `a` to `b`
it uses the parameters `a` and `b` to get a range, then use `Math.floor()` and `Math.random()` to pick a randomized integer, and returning chosen integer. it uses a if statement at the start to see if a is bigger than b, if so, it will just switch the places.

## Source Code
```js
// its simple
function RandomInt(a, b) {
  if (a > b) {
    var c = a;
    a = b;
    b = c;
  }

  return Math.floor(Math.random() * (b - a + 1) + a);
}

```
# `add()`
it does exactly what you think it does<br/>
`add(9,10)`
# `sub()`
it does exactly what you think it does
# `mul()`
`mul(1,1)`
# `div()`
Don't you dare divide by zero


