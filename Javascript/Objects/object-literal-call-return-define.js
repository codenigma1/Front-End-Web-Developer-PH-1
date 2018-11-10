/*Object-literal notation*/

// This way we can define properties of sister....it's looks pretty good.
var sister = {
  name: "Sarah", 
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true
};


// How to call or return the value

// There are two ways following;

// two equivalent ways to use the key to return its value

sister["parents"];       // returns [ "alice", "andy" ]
sister.parents;          // also returns ["alice", "andy"]

// Using sister["parents"] is called bracket notation (because of the brackets!) and using sister.parents is called dot notation (because of the dot!).

// Also we can add fucntion inside the object......
// You might have a paintPicture() method that returns "Sarah paints a picture!"

var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return "Sarah paints!"; }
};

sister.paintPicture();
sister.name

Returns: "Sarah paints!"
"Sarah"

