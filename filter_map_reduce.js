// ------- Filter --------
// EG:1
// let num1 = [-2, 0.9, 87, 7, 9, -78.9];
// let ans = num1.filter((val) => {
//   return val > 1;
// });

// console.log(ans);

// Eg:2
// let age = [23, 12.34, -9, 0.8, 19, 10, 20];
// let ans = age.filter(function (val) {
//   return val >= 18;
// });

// console.log(ans);

// --------- Map ---------
// DEF:  Map method is used to map an array to another array or list or something else

// EG:1   (Basic Eg)
// let arr1 = ["deo", "doe", "javascr", "python", "JS"];
// let ans = arr1.map(function (val) {
//   return val;
// });
// console.log(ans);

// EG:2 (maping to a List)
// let num = [1, -1, 2, 3, -9];
// let ans = num.map(function (n) {
//   return "<li>" + n + "</li>";
// });
// let items = "<ul>" + ans.join("") + "</ul>";
// console.log(items);

// EG:3 (Maping to an Object)
// let num = ["p", "i", "l", "o"];
// let ans = num.map(function (val) {
//   let obj = {
//     value: val,
//   };
//   return obj;

// ----// or
// return {value:val}

// });

// console.log(ans);

// -------- Reduce method --------

// EG:1
// let num = [2, 3, 4, 5, 6, -2, 12.7, 09.89];
// let ans = num.reduce(function (accumulator, currentvalue) {
//   return accumulator + currentvalue;
// }, 0);
// console.log(ans);
