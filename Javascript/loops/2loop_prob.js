// it's good example of the javascipt...

var num = 99;

while (num > 0) {
	/* your stop condition goes here */
    // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num
    if (num === 2) {
    	console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around..." + (num - 1) + " bottle of juice on the wall!")
    } else if (num === 1) {
    	console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!")
    } else {
    	console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!")
    }

    num = num - 1;
}


/*99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
...
2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!*/