// This is the inline expression funtion means to write fuction where you want to call or invoke function.

// for instance, see the following program


function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function laugh(integer) {					// This Inline expression function.......
															// Direct call means it saves line of code.
	var message = ""
    for (i = 1; i<= integer; i++){
        message = message + "ha";
    }
    return message + "!";
});