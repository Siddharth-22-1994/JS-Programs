// Example:1
// let p = new Promise((resolve, reject) => {
//   let add = 1 + 6;
//   if (add == 2) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

// p.then((message) => {
//   console.log("It is in the promise" + " " + message);
// }).catch((message) => {
//   console.log("It is in the catch" + " " + message);
// });

// Eg:2

const userLeft = false;
const catShow = false;

function status(){
	return new Promise((resolve, reject) =>{
		if(userLeft == false){
			resolve('User Watching Video');
		}
		else if(catShow == true){
			resolve('User on Cat Show');
		}
		else{
			reject('Thanks for watching');
		}
	})
}

status().then((message) =>{
	console.log(message);
}).catch((message) =>{
	console.log(message);
})


// Example:3  // To run all events at same time (i.e one event does not wait for another event to finish)
// const event1 = new Promise((resolve, reject) => {
//   resolve("Event 1 Completed");
// });

// const event2 = new Promise((resolve, reject) => {
//   resolve("Event 2 Completed");
// });
// const event3 = new Promise((resolve, reject) => {
//   resolve("Event 3 Completed");
// });

// // -- Imp-- There is also another command called (promise.race)
// Promise.all([event1, event2, event3]).then((message) => {
//   console.log(message);
// });

// Ref Link: https://www.youtube.com/watch?v=DHvZLI7Db8E
