// This is the nested loop apply here for to using row and column of the donuts.


var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

// here, donutBox.length refers to the number of rows of donuts and column
for (var row = 0; row < donutBox.length; row++) {
// here, donutBox[row].length refers to the length of the donut array currently being looped over
  	/*console.log(donutBox[row]);*/
 	for (var column = 0; column < donutBox[row].length; column++) {

    	console.log(donutBox[row][column]);
  	}
}

Prints:
"glazed"
"chocolate glazed"
"cinnamon"
"powdered"
"sprinkled"
"glazed cruller"
"chocolate cruller"
"Boston creme"
"creme de leche"



