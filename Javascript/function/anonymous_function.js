/*
 * Programming Quiz: Laugh (5-4)
 Anonymous Funciton call 
 */

var laugh = function(string){      /* finish the function expression ( Anonymous Funciton )----> 																	fuction doesn't have name */
    var message = ""
    for (i = 1; i<= string; i++){
        message = message + "ha";
    }
    return message + "!";
}

console.log(laugh(10));
