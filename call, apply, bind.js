let prof1 = {
  fname: "Sidhu",
  sname: "T",
};

let prof2 = {
  fname: "Sachin",
  sname: "Tendulkar",
};

function fullname() {
  console.log(this.fname + " " + this.sname);
}

// fullname.call(prof1);
// fullname.apply(prof2);
let myname = fullname.bind(prof1);
myname();
