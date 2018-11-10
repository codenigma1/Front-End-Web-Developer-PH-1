// This is the new concept in javascript "forEach()"--> function it's use only in array; so we don't need to use any loop and defined index through length.....xD


// This is the shortcut way using forEach()

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function (donuts){			// forEach() use for all element without using loop
	donuts += " hole";
	donuts = donuts.toUpperCase();
	console.log(donuts)
});

// This is longest way just like unprofessional way using forEach()

/*var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

function printDonuts(donuts){
	donuts += " hole";
	donuts = donuts.toUpperCase();
	console.log(donuts)
}

donuts.forEach(printDonuts);*/


// the variable `i` is used to step through each element in the array
// Simple loop;

/*for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}*/