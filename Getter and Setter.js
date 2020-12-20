// --------Method:1----------
// Getter and setter for Objects
// EG:1  (basic) --> https://www.youtube.com/watch?v=IbqCWoFO410
// let obj = {
//     name: "Sidhu",
//     year: 2078,

//     get change() {
//       return this.name;
//     },

//     set change(value) {
//       this.name = value;
//     },
//   };
//   obj.change = "Siddharth";
//   console.log(obj.change);

// Eg:2

// let person = {
//   fname: "Sidhu",
//   sname: "T",
//   get fullname() {
//     return this.fname +" "+ this.sname;
//   },
//   set rename(value) {
//   	const part = value.split(' ')
//     this.fname = part[0];
//     this.sname = part[1];
//   },
// };

// person.rename = 'vishwana Ananth';
// console.log(person.fullname);

// Link = https://www.youtube.com/watch?v=bl98dm7vJt0
// ------------------------------

// ---------Method:2----------
// Getter and Setter for Classes

// Eg:1(Simple example) [Link: https://www.youtube.com/watch?v=qkYvH9rQbNI]
// class prof {
//   constructor(author) {
//     this._author = author;
//   }

//   get overwrite() {
//     return this._author;
//   }

//   set overwrite(auth) {
//     this._author = auth;
//   }
// }

// let obj = new prof("Sidhu");
// obj.overwrite = "Sid";
// console.log(obj.overwrite);

// Eg:2
// class square {
//   constructor(width) {
//     this._width = width;
//     this._height = width;
//   }
//   get getarea() {
//     return this._width * this._height;
//   }
//   set setparameter(getarea) {
//     this._width = Math.sqrt(getarea);
//     this._height = this._width;
//   }
// }

// let s1 = new square(2);

// s1.setparameter = 5;
// console.log(s1.getarea);

// Link: https://www.youtube.com/watch?v=y4wDanUBNmE

// Eg:3
// class thermometer {
//   constructor(temp) {
//     this.ftemp = temp;
//   }

//   get celsious() {
//     let c = (5 / 9) * (this.ftemp - 32);
//     return c;
//   }

//   set celsious(c) {
//     // let f = (c * 9.0) / (5 + 32);
//     this.ftemp = c;
//   }
// }

// let ther = new thermometer(23);
// console.log(ther.celsious);
// ther.celsious = 98;
// console.log(ther.celsious);
