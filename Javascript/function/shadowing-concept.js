/*Without pasting into your console, what do you think this code will print out?*/

var x = 1;                    // declare gloablly

function addTwo() {
  x = x + 2;					///overwritting x value because it could not decalre separately
}

addTwo();
x = x + 1;					//overwritting x value because it doesn't decalre separately same	
console.log(x);

/*output it----------> 4; think about it why???????*/


/*Without pasting into your console, what do you think this code will print out?*/

var x = 1;

function addTwo() {
  var x = x + 2;		///overwritting x value because it does decalre separately
}

addTwo();
x = x + 1;				// overwritting gloabal that's why o/p--- 2
console.log(x);	

/*output it-----------> 2; think about it why???