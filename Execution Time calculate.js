const { performance } = require("perf_hooks");

// Method:1
const t0 = performance.now();

function add(a, b) {
  console.log(a + b);
}
add(3, 7);

const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

// ------------------------------------------------------------------------

// Method:2
// console.time("Time Starts");

// function add(a, b) {
//   console.log(a + b);
// }
// add(3, 7);

// console.timeEnd("Time end");
