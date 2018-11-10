/*
For this quiz, use jQuery to set up an event listener. Your event listener must:
    1. listen to the #my-button element
    2. listen for a `click` event
    3. perform the following actions when the button is clicked:
        a. remove the #my-button element from the DOM
        b. add the `success` class to the body
*/
/*$(this) ---> is very useful right now so you can current value of the function then simply remove and add class into the body!*/

$("#my-button").on("click", function(){
	$(this).remove(); 				// access current element and remove.
	$("body").addClass("success");  // select add class into the body.
})
