/// This is the quiz started .....very careful quit trick it's really confounding me at first time.

/*http://api.jquery.com/toggleClass */ /*visit this website look concept this is the biggest!!*/

// IN THIS PROBLEM I AM REMOVING THE ".featured" CLASS.. BY TOGGLECLASS METHOD..

var articleListFeautred;
articleListFeautred = $(".featured").toggleClass("featured"); // METHOD WORKED.
console.log("articleListFeautred");




/// /*
/*For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

You must use jQuery's toggleClass method!
*/

// don't change these variable!
// I AM REMOVING THE CLASS FROM ARTICLE 2 AND THEN ADD THAT CLASS IN ARTICLE 3....THAT IT.

var article2, article3;

article2 = $(".featured").next().toggleClass("featured");
article3 = article2;




// I AM USING DIFFERENT METHOD HERE ADDCLASS() MEHTOD HERE...
// your code goes here!
article2 = $(".featured").next().addClass("featured"); /// this is the working but quiz want to use toggleClass() method.....

article3 = article2

console.log(article3);


// 
