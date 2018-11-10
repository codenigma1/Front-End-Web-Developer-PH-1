/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/
/*http://api.jquery.com/append/
http://api.jquery.com/prepend/
http://api.jquery.com/insertBefore/
http://api.jquery.com/insertAfter/*/     visit link clear doubt...

// Your code goes here!

$("<div id='family2'> </div>").insertAfter("#family1");   // here I am adding sibling of family 1 means right after exit,then adding new div with family 2.

$("#family2").append("<h1>Family2</h1>");  // here are bit confusing because I'm adding inside the family 2 not outside as we saw priviously.....ok. 

$("#family2").append("<div id='bruce'> </div>"); // same here

$("#bruce").append("<h2>Bruce</h2>");   // same here..

$("#bruce").append("<div id='madison'> </div>"); // same here

$("#madison").append("<h3>Madison</h3>");		// same here

$("#bruce").append("<div id='hunter'> </div>");		// same here

$("#madison").append("<h3>Hunter</h3>");		// same here



							OR

var family1, family2, bruce, madison, hunter;

family1 = $("#family1");
family2 = $("<div id='family2'><h1>Family 2</h1></div>");
bruce = $("<div id='bruce'><h3>Bruce</h3>");
madison = $("<div id='madison'><h3>Madison</h3>");
hunter = $("<div id='hunter'><h3>Hunter</h3>");

family2.insertAfter(family1);
family2.append(bruce);
bruce.append(madison);
bruce.append(hunter);


















