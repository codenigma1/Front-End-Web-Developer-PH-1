/*
For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.
*/


$('#input').on('change', function() {
    var val, heading, display;     // here variables

    val = $('#input').val();    // we are using DOM tree method for selecting the tag and text and stored into the variable that cool method try to acquaint with this.

    heading = $('.articles').children('h1'); // we are here selecting tag and then go to children where we want to print text.. 

    /*display = h1.text('h1');  */ // I want to print "h1" here regardless I can print anything like "Vaibhav" just I need to change it....

    /*INSTEAD OF CHANGIN MORE TIME CODE, LET'S  MAKE DYNAMIC FROM THE TEXT BOX*/


    display = heading.text(val)   // means I change diretly value of input text tag in html here... cool 
    
});