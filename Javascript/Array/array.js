// This all about array means list [] as we saw in python with Dr. Chuck.
// This array topic from udacity.

var donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts[0]); // "glazed" is the first element in the `donuts` array.

Prints: "glazed"

// One thing to be aware of is if you try to access an element at an index that does not exist, a value of undefined will be returned back.

console.log(donuts[3]); // the fourth element in `donuts` array does not exist!

Prints: undefined

// Finally, if you want to change the value of an element in array, you can do so by setting it equal to a new value.

// we can replace with "powdered" with "glazed cruller"

donuts[1] = "glazed cruller"; // changes the second element in the `donuts` array to "glazed cruller"
console.log(donuts[1]);

udaciFamily = ["Vaibhav", "Julia", "James"];
console.log(udaciFamily);

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic]
console.log(crew);