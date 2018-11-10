// splice() lets you specify the index location to add new elements, as well as the number of elements you'd like to delete (if any).

var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "chocolate cruller", "creme de leche"); // removes "chocolate frosted" at 																index 1 and adds "chocolate cruller" 														and "creme de leche" starting at index 1

Returns: ["chocolate frosted"]
donuts array: ["glazed", "chocolate cruller", "creme de leche", "Boston creme", "glazed cruller"]

// Above description//
/*The first argument represents the starting index from where you want to change the array, the second argument represents the numbers of elements you want to remove, and the remaining arguments represent the elements you want to add.*/

// Quiz //
/*
 * Programming Quiz: Colors of the Rainbow (6-4)
   we have to add some color in the array.
 */

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

// your code goes here
rainbow.splice(2,1, "Yellow", "Green")   // adding two color. position, number of item remove., 											adding number of items
rainbow.splice(5,0, "Purple")    // then adding one color.