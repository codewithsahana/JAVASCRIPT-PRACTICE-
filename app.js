// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }
// //output
// //it will print 5 ,5 times in the console after every 1 second

//as let use block scope
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// output
// 0
// 1
// 2
// 3
// 4
// 5 after 1 sec

// for (var i = 0; i < 5; i++) {
//   function y(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//   y(i);
// }
// output
// 0
// 1
// 2
// 3
// 4
// 5 after 1 sec

// var n = 2;
// function square(num) {
//   var ans = num * num;
//   return ans;
// }

// var square2 = square(n);
// var square4 = square(4);

// console.log("The result is:", square2);
// console.log("The result is:", square4);

// output

// The result is : 4
// The result is : 16

//HOISTING

// getName();
// console.log(x);
// console.log(getName2);
// console.log(getName);

// var x = 10;

// function getName() {
//   console.log("Hello.....");
// }

// var getName2 = () => {
//   console.log("Hello Sahu");
// };

//output

//Hello.....
//undefined
//undefined
//it will log the whole function,because we are not invoking it.

//console.log(x); // print undefined
// var x = 1;
// a();
// b();
// console.log(x); // print 1

// function a() {
//   var x = 10;
//   console.log(x);
// }

// function b() {
//   var x = 100;
//   console.log(x);
// }

//output
// 10
// 100
// 1

// window & this keyword

// var a = 10;
// function b() {
//   x = 10;
// }
// console.log(this); // prints window object
// console.log(this.a); // prints 10
// console.log(a); // prints 10

// var a;
// console.log(a);

// if (a === undefined) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// output :- True

//Scope chain , Scope , Lexical Environment

// function a() {
//   var b = 10;
//   c();
//   function c() {
//     console.log(b);
//   }
// }
//var b = 10;
// a();
// console.log(b); // 10

//output :- 10

// console.log(a);
// let a = 10;
// var b = 100;

// console.log(b);
// var b = 10;
// a();
// function a() {
//   console.log("Heloo");
// }

// output :- undefined Heloo

//Example of Temorrary Dead Zone
// console.log(a); // Refference Errror : Cannot acces a before initialization
// let a = 10;

// var b = 100;

//block scope

// {
//   var a = 10;
//   let b = 100;
//   const c = 1000;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

// function (){
// }

// Output : - 7

// a(); // TypeError a is not a fuction
// var a = function () {
//   console.log("A called");
// };

// var b = function () {
//   console.log("B called");
// };
// b(); // B called

//Reverse An Array;
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.reverse();
// console.log(newArr);

//Concat array method-1

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const concat = [...arr1, ...arr2];

// console.log(concat);

//Concat array method-2

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const concat = arr1.concat(arr2);

// console.log(concat);

//fuction calling by it self

// (function () {
//   console.log("Hi");
// })();

//output - Hi

//triming the empthy space + greeting

// let userName = "     Sahu  ";
// let message = "Hello" + userName.trim() + "How are You?";
// console.log(message);

//lexical scope

// function parent() {
//   let a = 10;
//   function child() {
//     console.log(a);
//   }
//   child();
// }
// parent(); // 10

// function p() {
//   let a = 10;
//   function c() {
//     let a = 20;
//     console.log(a);
//   }
//   c();
// }
// p(); // 20

// function p() {
//   let a = 10;
//   function i() {
//     console.log(a);
//   }
//   return i;
// }
// p()(); // First Paranthisis will return the i function and the second paranthisis will invoke the i function on the same line.

// function g() {
//   var a = 10;
//   function p(b) {
//     let d = 20;
//     function c() {
//       console.log(a, b, d);
//     }
//     return c;
//   }
//   return p;
// }

// var result = g()("Hello");

// result();

//output :- 10 Hello 20

//Function Statement or Function Declaration

// function a() {
//   console.log("A called");
// }

// a();

//Function Expression

// var function1 = function b() {
//   console.log("B Called");
// };
// function1();

//setTimeout

// setTimeout(() => {
//   console.log("Hi");
// }, 3000);

//Event Handler

function ev() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", () => {
    console.log("You Clicked The Button", count++);
  });
}

ev();

// Area of Redius

// const radius = [3, 5, 7, 8];
// const clculateRadius = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };

// console.log(clculateRadius(radius));

// function a() {
//   var a = 10;
//   function b() {
//     console.log(a);
//   }
//   b();
// }
// a();

//output : 10

// function errorButton() {
//   document.getElementById("error").addEventListener("click", () => {
//     console.log("This Is A Error Button");
//   });
// }
// errorButton();

// (
//     function a (){
//         console.log("A called");
//     }
// ) ();

// function parent() {
//   function child() {
//     console.log(a);
//   }

//   child();
//   var a = 10;
// }
// parent();

// const user1 = {
//   name: "abc",
//   followers: 0,
// };

// const user2 = user1;

// user2.followers = user1.followers++;

// console.log(user1.followers); // 0
// console.log(user2.followers); // 0

// double the array

// const arr = [3, 4, 5];
// function double(x) {
//   return x * 2;
// }
// const output = arr.map(double);
// console.log(output);

// //triple the array

// const arr2 = [3, 4, 5];
// function triple(x) {
//   return x * 3;
// }
// const output2 = arr2.map(triple);
// console.log(output2);

// //binay

// const arr2 = [3, 4, 5];

// const output = arr2.map((x) => x.toString(2));

// console.log(output);

//find out the odd number

// const arr = [6,8,9];

// const output = arr.filter((x) => x % 2);

// console.log(output);

//find out the even number

// const arr = [4, 5, 8, 9, 7, 6];

// const output = arr.filter((x) => x % 2 === 0);

// console.log(output);

//find the value that are greater than 4

// const arr = [4, 5, 8, 9, 7, 6];

// const output = arr.filter((x) => x > 4);

// console.log(output);

//sum of all the elements in the array

// const arr = [4, 5, 8, 9, 7, 6];

// const output = arr.reduce((acc, curr) => {
//   acc = acc + curr;
//   return acc;
// }, 0);

// console.log(output);

// const arr = [6, 8, 9];

// const newArray = arr.map((x) => x * 2);

// console.log(newArray);

//maximum number in the array

// const arr = [6, 8, 9];

// const output = arr.reduce((acc, cur) => {
//   if (cur > acc) {
//     acc = cur;
//   }
// }, 0);

// console.log(output);

// const user = [
//   { firstName: "Sahana", latName: "Banerjee", age: "25" },
//   { firstName: "Sohini", latName: "Ghosh", age: "29" },
//   { firstName: "Sulagna", latName: "Paul", age: "34" },
//   { firstName: "Sasnthita", latName: "Biswas", age: "20" },
//   { firstName: "Basundhara", latName: "Sinha", age: "25" },
// ];

// const output = user.map((users) => users.firstName + " " + users.latName);
// console.log(output);

// const ageOutput = user.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});

// console.log(ageOutput);

// //filter age then show the name using filter and map
// const filterAgeOutput = user
//   .filter((users) => users.age < 30)
//   .map((users) => users.firstName);
// console.log(filterAgeOutput);

// //filter age then show the name using reduce
// const filterAgeOutput1 = user.reduce((acc, curr) => {
//   if (curr.age > 30) {
//     acc.push[acc.firstName];
//   }
//   return acc;
// }, []);
// console.log(filterAgeOutput1);
