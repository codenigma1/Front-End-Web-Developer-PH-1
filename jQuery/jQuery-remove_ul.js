/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems;

articleItems = $(".article-item").children("ul"); // again we used DOM tree method to select "ul" tag and then remove it!
articleItems.remove();


// precicely remove the bold list in the ul just do with this way!!!!
var articleItems, got;

articleItems = $(".article-item").children("ul");
got = articleItems.find(".bold");
got.remove();
