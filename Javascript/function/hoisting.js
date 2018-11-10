//Sometimes your JavaScript code will produce errors that may seem counterintuitive at first. Hoisting is another one of those topics that might be the cause of some of these tricky errors you're debugging.

// if you could not underestand watch the videos in udacity-web folder. :D


sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting;
}

/*o/p--- undefine Julia*/


What value will be printed to the console?

sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting = "Hello";
}

/*o/p--- undefine Julia
*/

What value will be printed to the console?

function sayHi(name) {
  var greeting = "Hello";
  console.log(greeting + " " + name);
}

sayHi("Julia");


/*o/p--- Hello Julia*/