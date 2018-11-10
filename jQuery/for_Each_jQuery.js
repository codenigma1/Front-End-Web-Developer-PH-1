/*
For this quiz, use jQuery's each() method to iterate through the <p>s,
calculate the length of each one, and add each length to the end of each <p>.

Also, make sure you don't change the text inside each <p> except to add the length, otherwise your
length numbers won't be correct!
*/

// Your code goes here!

/*var articleItem, para;

articleItem = $(".article-item").children("p");
para = (articleItem).each(function (index) {
	console.log(index + ":" + $(this).text());
});*/


// $(this)--> it return current text or value what is in it!


$("p").each(function(){
	var text, num, final;
	text = $(this).text();   // first read text from the <p> tag...
	num = text.length;		// I calculate length here then and stored it
	final = $(this).text(text + ":" + num);   // finally, I displayed both of them in final var...
});
console.log(text);


// here solved with the help of the funtion then put into the each(). similar to forEach and for ...

function numberAdder(){
	var text, number;
	text = $(this).text();
	number = text.length;
	$(this).text(text + ":" + number);
}

$("p").each(numberAdder);