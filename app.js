// var items = [
//   { name: "juice", price: 50, quantity: 3 },
//   { name: "cookie", price: 30, quantity: 9 },
//   { name: "shirt", price: 880, quantity: 1 },
//   { name: "pen", price: 100, quantity: 2 },
// ];

// //for single items
// let singleItem = items.forEach((item, index) => {
//   let items = item.price;
//   console.log("The price of items", index, "is", items);
// });

// //total sum of each item
// let total = items.reduce((sum, item) => sum + item.price, 0);
// console.log("The total prices of items are Rs: ", total);

// // Question no 2

// var StudentInfo = {
//   firstName: "Muhammad",
//   lastName: "Arbaz",
//   email: "arbazmuhammad876@gmail.com",
//   password: "Aj12345",
//   age: 19,
//   gender: "male",
//   city: "Karachi",
//   country: "Pakistan",
// };

// let fName = StudentInfo.hasOwnProperty("firstName");
// console.log(fName);
// let lName = StudentInfo.hasOwnProperty("lastName");
// console.log(lName);
// let age = StudentInfo.hasOwnProperty("age");
// console.log(age);
// let country = StudentInfo.hasOwnProperty("country");
// console.log(country);

// // Question no 3

// function Person(first, last, age, id, school) {
//   this.first = first;
//   this.last = last;
//   this.age = age;
//   this.id = id;
//   this.school = school;
// }
// //Create a Person Object
// const Student1 = new Person("Muhammad", "Arbaz", 18, 18016, "Saylani");
// const Student2 = new Person("Salman", "Milaad", 26, 45451, "Aptech");
// console.log(Student1, Student2);

// Question no 4

function CheckPopulation(name, gender, address, education, profession) {
  this.name = name;
  this.gender = gender;
  this.address = address;
  this.education = education;
  this.profession = profession;
}

const Peoples = new CheckPopulation(
  "Muhammad Arbaz",
  "Male",
  "Nazimabad",
  "Matric",
  "Web Developer"
);
console.log(Peoples);


// save value for education
function educationData() {
  var select = document.getElementById("education");
  if (localStorage === "") {
    select[localStorage.getItem("save")].selected = true;
  } else if (select.value === "Matric") {
    localStorage.setItem("save", select.value);
  } else if (select.value === "Intermediate") {
    localStorage.setItem("save", select.value);
  } else if (select.value === "Software Engineering") {
    localStorage.setItem("save", select.value);
  } else if (select.value === "P.hD") {
    localStorage.setItem("save", select.value);
  }
}

// save value for profession
function professionPeoples() {
  var profession = document.getElementById("profession");
  if (localStorage === "") {
    profession[localStorage.getItem("save")];
  } else if (profession.value === "Web developer") {
    localStorage.setItem("profession", profession.value);
  } else if (profession.value === "React Native") {
    localStorage.setItem("profession", profession.value);
  } else if (profession.value === "Flutter Developer") {
    localStorage.setItem("profession", profession.value);
  } else if (profession.value === "ios developer") {
    localStorage.setItem("profession", profession.value);
  }
}

// save value for radio button
var radio = document.getElementsByName("gender");
for (var i = 0; i < radio.length; i++) {
  if (radio[i].checked) {
    localStorage.getItem("gender");
  }
}
