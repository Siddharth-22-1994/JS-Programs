							// Class Inheritance Without Constructor
// EG:1

// class animals
// {
// 	voice()
// 	{
// 		console.log('All animal has voice');
// 	}
// }

// class cat extends animals
// {
// 	catvoice()
// 	{
// 		console.log('Cat mews');
// 	}
// }

// class dog extends cat
// {
// 	dogvoice()
// 	{
// 		console.log('Dog barks');
// 	}
// }

// let d = new dog();
// d.voice();
// d.catvoice();
// d.dogvoice();


							// Class Inheritance With Constructor
// EG:1
// Link : https://www.youtube.com/watch?v=RBLIm5LMrmc

// class user
// {
// 	constructor(name, age)
// 	{
// 		this.name = name;
// 		this.age = age;
// 	}

// 	disp1()
// 	{
// 		console.log(this.name, this.age);
// 	}
// }

// class place extends user{
// 	constructor(name, age, place)
// 	{
// 		super(name, age);
// 		this.place = place;
// 	}
// 	disp2()
// 	{
// 		console.log('This is my', this.place);
// 	}
// }

// let p = new place('Sidhu', 27, "cbe");
// p.disp1();
// p.disp2();



				// XXXXXXXXX   //Inheritance Prototype based Approach(Using function)
				
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




