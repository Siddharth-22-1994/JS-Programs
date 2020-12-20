
// -------- Callback function ------

		// ----- Eg:1
// let x = function(){
// 	console.log('Iam X function');
// }

// let y = function(callback){
// 	callback();
// 	console.log('Y function is here');
// }

// y(x);

		// ----- Eg:2
// let calc = function(a,b, calcType){
// 	if(calcType === 'add'){
// 		return a+b;
// 	}
// 	else if(calcType === 'sub'){
// 		return a-b;
// 	}
// } 

// console.log(calc(2,3, 'add'))

		// ----- Eg:3
// let add = function(a,b){
// 	return a+b;
// }

// let sub = function(a,b){
// 	return a-b;
// }

// let calc =function(a,b, callback){
// 	return callback(a,b)
// }

// console.log(calc(2,3, add))


// Ref: https://www.youtube.com/watch?v=pTbSfCT42_M