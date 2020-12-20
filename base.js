
// let evntList = document.getElementById('check');


// evntList.addEventListener('click', function(tv){
// 	console.log('Tigger as call back', tv.target, tv.type);
// })

// let emp = new Object;
// emp.id = 101;
// emp.name = 'sidhu';
// emp.place = 'Cbe';

// emp['Gender'] = 'male';
// console.log(emp);

// let x =['apple', 'orange', 'Banana', 'Grapes'];
// // console.log(x.toString());
// // console.log(x.join(';'));
// // x.pop();
// // x.push('cherry');
// // x.shift();
// // x.unshift('cherry');
// // console.log(x.length);
// // delete x[0];
// // x.splice(2,0, 'cherry', 'berry', 'mango');
// let y = ['kiwi', 'crow', 'hauck', 'eagle', 'duck'];
// let z = ['car', 'bike', 'lorry']
// // let ans = x.concat('coward');
// let ans = x.slice(1,2);
// console.log(ans);

// let x = 'Hey how are you all, how everything is going';
// x.length
// x.indexOf()
// let ans = x.slice(-18, -2);
// let ans = x.substrring(-3);--->Cannot accept negative value
// let ans = x.substr(-6);
// let ans = x.replace(/h/i,'o');
// x.toUpperCase()^
// x.toLowerCase();
// let y = '    zibime';
// x.concat('juhygtr');
// x.trim();
// x.charAt(6);
// x.charCodeAt();
// x.split(',');

// const x = ['apple', 'mango', 'grapes', 'cherry', 'cherry'];

// x.forEach(fruits)
// function fruits(item , index)
// {
// 	console.log(item, index)
// }

// x.forEach(function(item, index){
// 	console.log(item, index);
// })

// let i = 1;
// do{
// 	i++;
// 	if(i == 7)
// 	{
// 		continue;
// 	}
// 	console.log(i);

// }while(i<12)

// -------------------------------------- Enumarable prp -------------------------------------
// let car = {};
// car.color = 'Golden';
// car.name = 'Honda City';
// car.registernum = 'Cbe';

// Object.defineProperty(car, "name",{
// 	enumerable: true,
// 	writable: false
// })
// for(val in car)
// {
// 	console.log(val,car[val]);
// }
// ----------------------------------------------------------------------

// object literals
// function createcircle()
// {
// 	return{
// 		name: 'Sidhu',
// 		age:26,
// 		Place: {
// 			hometown:'pollachi',
// 			job:'Cbe'
// 		}
// 	};
// }

// console.log(createcircle());

// Factory Function
// function createCircle(radius)
// {
// 	return{
// 		radius,
// 		draw: function()
// 		{
// 			console.log('Draw circle');
// 		}
// 	};
// }
``;
// let c1 = createCircle(1);
// c1.draw();

// Constructor Function
// function Circle(radius){
// 	this.radius = radius;
// 	this.draw = function(){
// 		console.log('This is draw function');
// 	}
// }
// let another = new Circle(2);
// another.draw()

// let employee = {
// 	details: function(age, place){
// 		console.log(this.name+' '+this.id+' '+age+' '+place);
// 	}
// }

// let emp1 = {
// 	name:'Sidhu',
// 	id:123
// }

// let emp2 = {
// 	name: 'Sid',
// 	id: 134
// }

// employee.details.call(emp1, 25, 'Cbe');
// employee.details.call(emp2, 27, 'Hybd');

// function greet(text){
// 	console.log(text+' '+this.fname+' '+this.sname);
// }

// let emp1 = {
// 	fname:'Sidhu',
// 	sname:'T'
// }

// let obj = greet.bind(emp1);
// obj('Hello');

// let cars = ['BMW', 'Benz', 'Audi', 'City'];
// cars.forEach(fun)

// function fun(item, index)
// {
// 	console.log(item, index)
// }

// function sum(a,b){
// 	return a+b;
// }

// console.log(sum(3,6))

//
// function emp(id, name)
// {
// 	this.fid = id;
// 	this.fname = name;
// 	this.change = change;

// 	function change(othersal)
// 	{
// 		this.fsal = othersal;
// 	}
// }

// let e = new emp(102, 'Sid')
// console.log(e.fid, e.fname, e.fsal);

// e.change(75000)
// console.log(e.fid, e.fname, e.fsal);

// function sum(a,b)
// {
// 	console.log(a+b);
// }

// let sum = (a,b)=> a+b;
// console.log(sum(9,4));

// class employee
// {
// 	constructor(name, age)
// 	{
// 		this.fname = name;
// 		this.fage = age;
// 	}

// 	disp()
// 	{
// 		console.log(this.fname, this.fage);
// 	}
// }

// let emp = new employee('Sidhu', 26)
// emp.disp();

// function Employee(fname, sname)
// {
// 	this.fname = fname;
// 	this.sname = sname;
// }

// Employee.prototype.fullname = function()
// {
// 	return this.fname+' '+this.sname;
// }

// let emp1 = new Employee('Sidhu', 'T')
// console.log(emp1.fullname());

// class profile
// {
// 	constructor(name, age)
// 	{
// 		this.fname = name;
// 		this.fage = age;
// 	}
// 	display()
// 	{
// 		console.log(this.fname, this.fage);
// 	}
// }

// class emp extends profile
// {
// 	constructor(name, age,company, year)
// 	{
// 		super();
// 		this.fname = name;
// 		this.fage = age;
// 		this.fcompany = company;
// 		this.fyear = year;
// 	}
// 	disp2()
// 	{
// 		console.log(this.fcompany, this.fyear);
// 	}
// }

// let p = new emp('Sidhu', 26, 'Own company', 2020);
// p.display();
// p.disp2();

// class parent
// {
// 	display()
// 	{
// 		console.log('Parent class');
// 	}
// }

// class base_1 extends parent
// {
// 	display()
// 	{
// 		console.log('Base class 1');
// 	}
// }

// let obj = [new base_1(), new parent()];

// obj.forEach(function(msg)
// {
// 	msg.display();
// });

// class overload
// {
// 	sum(a=null, b=null, c=null)
// 	{
// 		let ans = 0;
// 		if(a!=0, b!=0, c!=0)
// 		{
// 			ans = a+b+c;
// 		}
// 		else if(a!=0, b!=0)
// 		{
// 			ans = a+b;
// 		}
// 		else
// 			ans = a;
// 		console.log(ans);
// 	}
// }

// let obj = new overload();
// obj.sum(2);

// function Employee(name)
// {
// 	this.fname = name;

// 	this.getfun = function()
// 	{
// 		console.log(this.fname);
// 	}
// }

// let e1 = new Employee('Sidhu');
// console.log(e1.getfun());

// function msg()
// {
// 	alert('Hey there');s
// }

// let a = 89;
// if(a<20)
// {
// 	console.log('Number is less');
// }
// else
// {
// 	console.log('Number is greater');
// }

// var b=50;

// function a()
// { document.write
// 	let b = 45;document.write
// 	document.write(b);	console.log(i);

// 	document.write(window.b);
// }

// let cub = new Function('a', 'b', 'return a+b');
// document.write(cub(3,5));

// let a = ['apple', 'mango', 'grapes'];
// // for(i=0; i<a.length;i++)
// // {
// // 	console.log(a[i]);
// // }

// for(val in a)
// {
// 	console.log(val);
// }

// let num1 = prompt('Enter the 1st number');
// let num2 = prompt('Enter the 2nd number');

// if(num1>num2)
// {
// 	document.write(num1+' '+'is greater');
// }
// else if(num1<num2)
// {
// 	document.write(num2+' '+'is greater');
// }
// else
// {
// 	document.write('Both are equal');
// }

// let name = 'Sidhu';
// let age = 26;
// let place = 'Covai';

// // console.log('My name is', name, '\nMy age is', age, '\nIam from', place)
// console.log(`My name is ${name}.
// Iam ${age} years old.
// Iam form ${place}.`)

// function greet(str)
// {
// 	console.log(str);
// }

// greet `Sidhu`

// function tagline(string)
// {
// 	console.log(string);
// }
// let name1 = 'Sidhu';
// let name2 = 'Sid';

// tagline(name1);
// tagline(name2);

// let arr1 = ['Sid', 'Suny', 'Beny', 'Jeny'];
// for(i=0;i<arr1.length;i++)
// {
// 	console.log(`My name is ${arr1[i]}`);
// }

// let emp = {name:'Sidhu', age:26, place:'Covai'};
// console.log(emp.name, emp.age, emp.place);

// let obj1 = new Object();
// obj1.id = 'CS4';
// obj1.name = 'Sidhu';
// obj1.age = 27;

// console.log(obj1);

// function emp(name, age, place)
// {
// 	this.fname = name;
// 	this.fage = age;
// 	this.fplace = place;
// }

// let e = new emp('102', 'Sidhu', 'covai');
// console.log(e.fname, e.fage, e.fplace);

// function emp(name, age, place)
// {
// 	this.fname = name;
// 	this.fage = age;
// 	this.fplace = place;

// 	this.changeplace = changeplace;

// 	function changeplace(otherplace)
// 	{
// 		this.fplace = otherplace;
// 	}
// }

// let e = new emp('Sidhu', 26, 'Cbe');
// console.log(e.fname, e.fage, e.fplace);

// e.changeplace('Covai')
// console.log(e.fname, e.fage, e.fplace);

// function prof(name, age)
// {
// 	this.fname= name;
// 	this.fage = age;

// 	function display()
// 	{
// 		console.log(this.fname, this.fage);
// 	}
// 	display()
// }

// prof('Sidhu', 26)

// let prof = {
// 	fname : 'Sidhu',
// 	sname :  'giri',
// 	fullname: function()
// 	{
// 		console.log(this.fname+' '+this.sname);
// 	}
// }

// prof.fullname();

// function profile(name, age)
// {
// 	this.name = name;
// 	this.age = age;
// }

// let p = new profile('Sidhu', 26);
// console.log(p.name, p.age);

// function profile(name, id, age)
// {
// 	this.fname = name;
// 	this.fage = age;
// 	this.fid = id;

// 	this.changename = changename;

// 	function changename(othername)
// 	{
// 		this.fname = othername;
// 	}
// }

// let p = new profile("sid", 'A23', 26);
// console.log(p.fname, p.fage, p.fid);

// p.changename('Sidhu');
// console.log(p.fname, p.fage, p.fid);

// function prof()
// {
// return {
// 	name:'Sidhu',
// 	age:26,
// 	place:{
// 		native:'Tamil Nadu',
// 		office:'Hybd'
// 	}
// }

// }

// let p = prof();
// console.log(p.name);

// function prof()
// {
// 	let obj1 = new Object()
// 	obj1.name = 'Sidhu';
// 	obj1.age = 26;
// 	return (obj1);
// }

// console.log(prof());

// let car = {
// 	brand:'Ford',
// 	verb: function()
// 	{
// 		return(`Driving my ${this.brand}`);
// 	}

// }

// console.log(car.verb());

// this.table = 'Sidhu table';

// const cleantable = function()
// {
// 	console.log(`Cleaning ${this.table}`);
// }

// cleantable.call(this)

// this.garage = {
// 	table:'garage table',
// };

// this.sidtable = {
// 	table:'sid table',
// };

// cleantable.call(this.garage);

// cleantable.call(this.sidtable);

// let str1 = 'Guys Hello Were are you Hello';
// ans = str1.indexOf('Hello');
// ans1 = str1.lastIndexOf('Hello');
// ans2 = str1.search('Z');
// ans3 = str1.slice(4,16);
// ans4 = str1.substring(3,7); //---> does not take negative
// ans5 = str1.substr(3,7); //---> The second number denotes the length of the string

// let a = -4+ans;
// console.log(ans);
// console.log(ans1);
// console.log(ans2);
// console.log(ans3);
// console.log(ans4);
// console.log(ans5);

// ans6 = str1.replace(/hello/i, 'Hey');
// console.log(ans6);

// ans7 = str1.toUpperCase()
// console.log(ans7);

//
// console.log(str1.charCodeAt(6));

// let txt = "a,s,d,f,g,h";
// let ans = txt.split(",");
// console.log(ans);

// x='10';
// y='5';
// ans = 'the ans is', x/y;

// console.log(isNaN(ans));

// console.log(parseFloat(10.89))

// var myNumber = 2;
// var txt = "";
// while (myNumber != Infinity)
// {
//    myNumber = myNumber * myNumber;
//    txt = txt + myNumber + "<br>";
//    console.log(txt);
// }

// let x = 0x1D;
// let x1 = 0x2D;
// let x2 = 0x3D;
// let x3 = 0x4D;
// let x4 = 0x5D;
// let x5 = 0x6D;
// let x6 = 0x7D;
// let x7 = 0x8D;

// console.log(x);
// console.log(x1);
// console.log(x2);
// console.log(x3);
// console.log(x4);
// console.log(x5);
// console.log(x6);
// console.log(x7);

// let food = ["Chapathi", "veg", "non-veg", "Biriyani"];
// let ans = food[food.length-1];
// console.log(ans);
// let place = 'Chennai';
// for(val of place)
// {
// 	console.log(val);
// }

// food.push('Pizza', 'Burger');
// console.log(food);

// food[10] = 'Pizza';
// console.log(food);

// let emp = [];
// emp.push('emp1', 'emp2', 'emp3', 'emp4');
// console.log(food[-1]);

// console.log(food.toString());

// let name = 'Siddhu';
// let arr = name.split(",");
// console.log(Array.isArray(arr));

// var fruits = [23,4,-9, 0.8, 78,1];
// console.log(fruits.sort(function(a,b){return a-b}));

// class Employee
// {
// 	constructor(id, name)
// 	{
// 		this.fid = id;
// 		this.fname = name;
// 	}
// 	detail()
// 	{
// 		console.log(this.fid, this.fname);
// 	}
// }

// let e1 = new Employee(167, 'Sidhu');
// e1.detail();

//Declaring class
// var emp=class
//   {
// //Initializing an object
//     constructor(id,name)
//     {
//       this.id=id;
//       this.name=name;
//     }
// //Declaring method
// detail()
//     {
//   console.log(this.id+" "+this.name+"<br>")
//     }
//   }
// //passing object to a variable
// var e1=new emp(101,"Martin Roy");
// var e2=new emp(102,"Duke William");
// e1.detail(); //calling method
// e2.detail();

// //Re-declaring class
// var emp=class
//   {
// //Initializing an object
//     constructor(id,name)
//     {
//       this.id=id;
//       this.name=name;
//     }
//     detail()
//     {
//   console.log(this.id+" "+this.name+"<br>")
//     }
//   }
// //passing object to a variable
// var e1=new emp(103,"James Bella");
// var e2=new emp(104,"Nick Johnson");
// e1.detail(); //calling method
// e2.detail();

// function sum(a, b) {
//   let c = a + b;
//   return c;
// }

// s = sum(4, 5);

// console.log(`The answer is ${s}`);

// let ispositive = (number) => number >= 0;
// console.log(ispositive(7));

// let a1 = [2, 143, 13, 5, 89, 0.9, -7];
// let ans = a1.sort();
// console.log(ans);

// let asc_arr = [2, 143, 13, 5, 89, 0.9, -7];
// console.log(asc_arr.sort((a, b) => a - b));

// let sum1 = 0;
// function sumofnum(x) {
//   while (x != 0) {
//     rem = x % 10;
//     sum1 = sum1 + rem;
//     x = x / 10;
//   }
//   console.log(parseInt(sum1));
// }

// sumofnum(234);

// let year = 2020;
// let ans = year % 4 == 0 ? "Leap year" : "not leap year";
// console.log(ans);

// let mark = 77;
// let ans =
//   mark > 80 && mark <= 100
//     ? "O grade"
//     : mark > 70 && mark <= 79
//     ? "A Grade"
//     : mark > 50 && mark < 69
//     ? "B grade"
//     : "C grade";
// console.log(ans);

// let age = prompt("What is your age?", 18);

// let welcome = age < 18 ? () => alert("Hello") : () => alert("Greetings!");

// welcome();
// let year = 2020;
// let ans = year % 4 == 0 ? () => "Leap year" : () => "Not leap";
// console.log(ans());

// function leapyr(year) {
//   if (year % 4 == 0) {
//     console.log("Its leap year");
//   } else {
//     console.log("Not leap");
//   }
// }
// leapyr(2089);

// let ans = (year) => (year % 4 == 0 ? "Leap year" : "Not leap");
// console.log(ans(2020));

// let prof = {
//   fname: "Sidhu",
//   sname: "Giri",
//   place: function () {
//     return `The name is ${this.fname} ${this.sname}`;
//   },
// };
// console.log(prof.place());

// function emp(name, id, place) {
//   this.fname = name;
//   this.fid = id;
//   this.fplace = place;
// }
// e = new emp("Sidhu", "145", "Cbe");
// console.log(typeof e);

// let emp = class {
//   display(name, age) {
//     console.log(`My name is ${name}. Iam ${age} years old.`);
//   }
// };

// let e = new emp();
// e.display("Sidhu", 26);

// function Employee(name, sname) {
//   this.fname = name;
//   this.sname = sname;
// }

// Employee.prototype.fullname = function () {
//   console.log(`${this.fname} ${this.sname}`);
// };

// let e1 = new Employee("Sidhu", "T");
// e1.fullname();

// function prof(fname, sname) {
//   this.fname = fname;
//   this.sname = sname;
// }

// prof.prototype.age = 26;

// let p1 = new prof("Sidhu", "t");
// console.log(p1.fname, p1.sname, p1.age);

// let profile = class {
//   constructor(name, age) {
//     this.fname = name;
//     this.fage = age;
//   }

//   display() {
//     console.log(`${this.fname} ${this.fage}`);
//   }
// };

// let p = new profile("Sidhu", 27);
// p.display();

// let profile = class {
//   fname = "M.S";
//   sname = "Dhoni";
// };

// let p1 = new profile();
// console.log(p1.fname, p1.sname);

// console.time("time");

// function add(a, b) {
//   console.log(a + b);
// }
// add(3, 7);

// console.timeEnd("time");

// let sum = function (a) {
//   return function (b) {
//     if (b) {
//       return sum(a + b);
//     } else {
//       return a;
//     }
//   };
// };

// console.log(sum(1)(2)(3)(4));

// function greet(name)
// {
// 	console.log(`This is ${name}`);
// }

// greet('Sidhu');

// let user = prompt(String('Enter the name'));

// function greet(user)
// {
// 	document.getElementById('demo').innerHTML= `Hello ${user}`;
// }

// function resize()
// {
// 	document.getElementById('demo').style.fontSize = '20px';
// }

// let prof = {
// 	fname:'Sidhu',
// 	sname:'T',
// 	fullname: function()
// 	{
// 		return `My name is ${this.fname} ${this.sname}`;
// 	}
// }

// let ans = prof.fullname()
// console.log(ans);

// let prof1 = {
// 	fname:'Sidhu',
// 	sname:'T'
// };

// let prof2 = {
// 	fname:'Sid',
// 	sname:'Giri'
// };

// function fullname()
// {
// 	console.log(this.fname+' '+this.sname);
// }

// fullname.call(prof1);
// fullname.call(prof2);
// const { performance } = require("perf_hooks");

// t0 = performance.now();

// function Employee(name1, name2)
// {
// 	this.fname = name1;
// 	this.sname = name2;
// 	function disply()
// 	{
// 		return this.fname+' '+this.sname;
// 	}
// disply();

// }
// let e = new Employee('Sidhu', 'T');
// let e2 = new Employee('Sid', "giri");
// console.log(e.fname, e.sname);
// console.log(e2.fname, e2.sname);

// t1 = performance.now();
// console.log(t1-t0);

// t3 = performance.now();

// function emp(name3, name4)
// {
// 	this.f1name = name3;
// 	this.s1name = name4;
// }

// emp.prototype.fulname = function(){
// 	return this.f1name+' '+this.s1name;
// }

// let emp1 = new emp('Siddharth', "T");
// let emp2 = new emp('Sachi', 'Dulkar');

// console.log(emp1.fulname());
// console.log(emp2.fulname());
// t4 = performance.now();
// console.log(t4-t3);

// ------------------------------------
// super() method
// class companyname
// {
// 	constructor(companyname)
// 	{
// 		this.fcomp = 'Sidhu NewCompany';
// 	}
// }

// class emp extends companyname
// {
// 	constructor(id, name)
// 	{
// 		super();
// 		this.fid = id;
// 		this.fname = name;
// 	}
// }

// let e = new emp(2, 'Sid');
// console.log(e.fid, e.fname, e.fcomp);
// ----------------------------------------

// class emp
// {
// 	constructor(fname, sname)
// 	{
// 		this.fname = fname;
// 		this.sname = sname;
// 	}
// }

// emp.prototype.place = 'Cbe';

// emp.prototype.fullname = function()
// {
// 	return this.fname+' '+this.sname+' '+this.place;
// }

// let e = new emp('Sidhu', 'T');
// console.log(e.fullname());

// class prof
// {
// 	constructor()
// 	{
// 		prof.disp();
// 	}

// 	static disp()
// 	{
// 		console.log('This is static method');
// 	}
// }

// let p = new prof();

// function comp(name, age)
// {
// 	this.name = name;
// 	this.age = age;
// }

// comp.prototype.prof = function()
// {
// 	return this.name, this.age;
// }

// let c = new comp('Sidhu', 27);
// console.log(c.prof());

// function Bike(company)
// {
// 	this.fcompany = company;
// }

// Bike.prototype.getcompany = function()
// {
// 	return this.fcompany;
// }

// function Vehicle(name, price)
// {
// 	this.fname = name;
// 	this.fprice = price;
// }

// let bike = new Bike('Honda');

// Vehicle.prototype = bike;

// let veh = new Vehicle('Shine', '80,000')
// console.log(veh.fname, veh.fprice, veh.fcompany);

// function company(name)
// {
// 	this.name1 = name;
// }

// company.prototype.disp = function()
// {
// 	return this.name;
// }

// function bike(name, model)
// {
// 	this.name = name;
// 	this.model = model;
// }

// let comp = new company('Bajaj');

// bike.prototype = comp;

// let model = new bike('Dominow', 400);
// console.log(model.name1, model.name, model.model);

// let sum = function(a,b)
// {
// 	return a+b;
// }

// module.exports.add = sum;

// let sub = function(c,d)
// {
// 	return c-d;
// }

// module.exports.minus = sub;

// next: https://www.youtube.com/watch?v=RLtyhwFtXQA

// const EventEmitter = require("events");
// const evemitter = new EventEmitter();

// class person extends evemitter {
//   constructor(name) {
//     super();
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }
// }
// let pedro = new person("pedro");

// pedro.on("name", () => {
//   console.log("my name is" + pedro.name);
// });

// pedro.emit("name");

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

// class baseclass {
//   constructor(name) {
//     this.fname = name;
//   }
//   disp() {
//     console.log(this.name);
//   }
// }

// class child_1 extends baseclass {
//   constructor(name, age) {
//     super(name);
//     this.fage = age;
//   }

//   display() {
//     console.log(this.fage);
//   }
// }

// let c1 = new child_1("Sidhu", 26);
// c1.disp();
// c1.display();

// class A {
//   display() {
//     console.log("A is invoked");
//   }
// }

// class B extends A {
//   display() {
//     console.log("B is invoked");
//   }
// }

// let obj = [new A(), new B()];

// obj.forEach(function (msg) {
//   msg.display();
// });

// let arr = ["h", "j", "m", "r", "u"];
// for (val of arr) {
//   console.log(val);
// }

// let leter = ["a", "b", "c", "d", "a", "b", "b", "c"];
// console.log(leter.count["a"]);
// let count = {};

// leter.forEach((item) => {
//   if (count[item]) {
//     count[item]++;
//   } else {
//     count[item] = 1;
//   }
// });
// console.log(count);

// let time = 0;

// let timer = setTimeout(function () {
//   time = time + 2;
//   console.log(time + "Delayed result");
//   if (time >= 6) {
//     clearInterval(timer);
//   }
// }, 2000);

// setTimeout(function () {
//   console.log("Delayed answer");
// }, 1500);

// const fs = require("fs");

// fs.appendFile("Topics23.txt", "\nagain line to you the new file", function (
//   err
// ) {
//   console.log("file appended");
// });

// let a1 = [2, 3, 4, 5, 6, 78, 90, 97];
// let ans = [];
// for (let i = 0; i < a1.length; i++) {
//   if (a1[i] % 2 == 0) {
//     ans.push(a1[i]);
//   }
// }
// console.log(ans);

// let age = [23, 17, 1, 2, 3, 4, 89, 0.1, -7.8, -65];
// let ans = 0;
// let ans = voter.filter(function (arg) {
//   if (arg >= 18) {
//     return true;
//   }
// });
// console.log(ans);
// voter.forEach((val) => {
//   console.log(val);
// });

// let arr1 = ["deo", "doe", "javascr", "python", "JS"];
// const ans = exstarray.map(
//   function (val, ind) {
//     return val + " " + ind + " " + this.name;
//   },
//   {
//     name: "dom",
//     age: 26,
//   }
// );

// console.log(ans);
// let obj = {
//   name: "Sidhu",
//   year: 2078,

//   get change() {
//     return this.name;
//   },

//   set change(value) {
//     this.name = value;
//   },
// };
// obj.change = "Siddharth";
// console.log(obj.change);

// const Eventemitter = require("events");
// let emitter = new Eventemitter();

// emitter.on("task1", function () {
//   console.log("Task1 event emitted");
// });

// emitter.emit("task1");

// class person extends Eventemitter {
//   constructor(name) {
//     super();
//     this._name = name;
//   }
//   get name() {
//     return this._name;
//   }
// }

// let sid = new person("Sidhu");
// let someg = new person("girl");

// sid.on("task1", function () {
//   console.log(`My name is ${sid.name}`);
// });

// someg.on("task2", function () {
//   console.log(someg.name);
// });
// sid.emit("task1");

// someg.emit("task2");

// function profile()
// {
// 	name = 'Sidhu'
// 	age = 26
// }

// profile()

// console.log(name, age);

// --------------------------------------
// let mark = prompt('Enter mark');
// if(mark>80 && mark<=100){
// 	let ans = 'O grade';
// 	confirm(ans);

// }

// else if (mark>60 && mark<=79) {
// 	let ans = 'A grade';
// 	confirm(ans);
// }
// else if(mark >50 && mark<=59){
// 	let ans  = 'B grade';
// 	confirm(ans);
// }

// else if(mark>35 && mark<=49){
// 	let ans = 'C grade';
// 	confirm(ans);
// }
// else{
// 	let ans = 'No grade';
// 	confirm(ans);
// }

// if(ans == 'ok'){
// 	document.write('Grade Confirmed');
// }
// else{
// 	document.write('Ok Cross verfy with your CR');
// }

// let mark = 'A';
// switch(mark){
// 	case 'O':
// 	let ans = 'O grade';
// 	break;

// 	case 'A':
// 	let ans = 'A grade';
// 	break;

// 	case 'B':
// 	let ans = 'B grade';
// 	break;

// 	case 'C':
// 	let ans = 'C grade';
// 	break;

// 	default:
// 	let ans = 'No grade';
// 	break;
// }

// document.write('ans');

// const puppteer = require('puppteer')
// (async () => {
// 	const browser = await puppteer.launch()
// })()

// let num = typeof(4);
// let a = prompt('Enter the value');

// function check(){
// try{
// let type_a = typeof(a);
// if (type_a == num)
// {
// 	document.write(a)
// }
// }

// catch(err){
// 	throw('Please Enter Number', err);
// }

// }

// check();

// let arr1 = [2,3,4,5]

// let ans = arr1.map(x => x*2)
// console.log(ans)

// function getcube(){
// let num = document.getElementById('number').value;
// // document.getElementById('ans').innerHTML = num*3;
// console.log(num*4);
// }

// try{
// 	console.log('exception');
// 	get();
// }
// catch(er){
// 	console.log('Something is wrong');
// }
// finally{
// 	console.log('Finally Executed');
// }




// let obj = [
// 	{
// 		name:'Sidhu',
// 		age:27
// 	},
// 	{
// 		name:'name2',
// 		age:28
// 	},
// 	{
// 		name:'name_3',
// 		age:29
// 	}
// ]


// let p = new Promise((resolve, reject) => {
// 	let a = 1+3
// 	if(a == 4){
// 		resolve('Yes');
// 	}
// 	else{
// 		reject('No');
// 	}
// })


// p.then((message) =>{
// 	console.log(message);
// }).catch((message) =>{
// 	console.log(message);
// })










































