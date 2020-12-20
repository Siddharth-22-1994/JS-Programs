
// Link: https://www.youtube.com/watch?v=XkiFnYSjK4A

// 1. To use Super method
// class Department
// {
// 	constructor(){

// 	}
// }


// class shop extends Department{
// 	constructor(){
// 		super()           							//-- super() helps to use constructor in child class--
// 		console.log('Base class through super');

// 	}
// }

// let child1 = new shop();


// 2. TO use super keyword
class Department{
	constructor(){

	}

	base_disp(){
		console.log('From base method');
	}
}

class Shop extends Department{
	// constructor(){

	// 	console.log('from child constr');
	// }

	child_disp(){
		super.base_disp(); //--- we have executed base method from child class ---
	}
}

let child1 = new Shop();
child1.child_disp()



















