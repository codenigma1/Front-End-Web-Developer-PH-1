// Key concept please read this


//or click url: https://classroom.udacity.com/courses/ud304-in/lessons/378e7ff7-f7e5-4487-b5c4-fdf9b5c351d9/concepts/718ad8c4-01b0-4146-824d-d2876d7d1089#

/*or
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/
// The function that you pass to the forEach() method can take up to three parameters. In the video, these are called "element", "index", and "array", but you can call them whatever you like.

// The forEach() method will call this function once for each element in the array (hence the name forEach.) Each time, it will call the function with different arguments. The element parameter will get the value of the array element. The index parameter will get the index of the element (starting with zero). The array parameter will get a reference to the whole array, which is handy if you want to modify the elements.

// Here is one example
		/*E 	  I     A */  /*----> very imporant to know*/
words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});

// I understood this output
Prints:
Word 0 in cat,in,hat is cat		// first print string "Word" then num = 0 because index, "in" 									string, then all.toString() used all array such as "cat", "in",									"hat". then "is" + word means element is "cat"........ repeat									 same process.....
Word 1 in cat,in,hat is in
Word 2 in cat,in,hat is hat


