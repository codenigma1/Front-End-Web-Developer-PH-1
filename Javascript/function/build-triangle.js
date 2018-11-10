/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length

// this is a challenging problem but logic is same but method little bit different as funtion I don't anything.........................

function makeLine(length) {
    var line = "";
    for (var i = 1; i <= length; i++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTraingle(length) {
    var makeStar = "";
    for (var j = 1; j <= length; j++) {
        makeStar += makeLine(j);  ////// function expression is used in this.
    }
    return makeStar;
}






console.log(buildTraingle(10));
