// the reversting program in fuction at javascipt
// Awesome example;

function revString(reverseMe) {
	var reversed = "";
	for (var i = reverseMe.length - 1; i >= 0; i--) {
		reversed = reversed + reverseMe[i];
	}
	return reversed;
}

console.log(revString("you are going to die!"));

// With return and without return function///////////
// Try it this code!


/*function sayHello() {
	var message = "Hi";
	console.log(message);
	return message;
}*/