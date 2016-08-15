// ========================= PART 2 ==========================//
// NB: Make sure your tests pass before attempting this part
// of the homework
// ===========================================================//

// require mongoose
var mongoose = require('mongoose');

// connect to the database mongodb://localhost/animal-shelter
mongoose.connect("mongodb://localhost/animal-shelter");

// require your models
var Animal = require("./models/animal");
var Client = require("./models/client");
var Shelter = require("./models/shelter");

// clear out the database to prevent duplicates (optional)
Shelter.collection.drop();
Animal.collection.drop();
Client.collection.drop();

// Create a shelter


var client1 = Client.create({
name: "Chanse Campbell",
dob: new Date(1990, 06, 23),
gender: "male"
}, function (err, client1){
if(err) console.error(err);
console.log("client created!",client1);

  var client2 = Client.create({
    name: "Rosanna Rossington",
    dob: new Date(1990, 01, 05),
    gender: "female"
  }, function (err, client2){
    if(err) console.error(err);
    console.log("client created!", client2);

    var animal1 = Animal.create({
      name: "Rupert",
      dob: Date(2009, 09, 15),
      type: "cat",
      breed: "British short-haired",
      status: "adopted",
      owner: client1
    }, function (err, animal1){
      if(err) console.error(err);
      console.log("animal1 created!", animal1);

      var shelter = Shelter.create({
        name: "Jason's Animal Shelter",
        animals: [animal1],
        clients: [client1,client2]
      }, function(err,shelter) {
        if(err) console.error(err);
        console.log("shelter created!",shelter);

      }); //end of Shelter Create Callback
    });//end of Animal1 Create Callback
  }); //end of Client2 Create Callback
}); //end of Client1 Create Callback




// var shelter = new Shelter({
//   name: "Jason's Animal Shelter",
//   animals: [],
//   clients: []
// });

// shelter.save(function(err, shelter) {
//   if(err) return console.log(err);
//   console.log("shelter saved!", shelter);

//   // Create your clients (in the shelter create callback)

//   var client1 = new Client({
//     name: "John Smith",
//     dob: new Date(1990, 01, 01),
//     gender: "male";
//   }); //end of new Client1

//   client1.save(function(err, client1) {
//     if(err) return console.log(err);
//     console.log("client1 saved!", client1);

//     var client2 = new Client({
//       name: "Jane Doe",
//       dob: new Date(1984, 06, 23),
//       gender: "female";
//     });//end of new Client2

//     client2.save(function(err, client2))

//   }); //end of client1.save

// }); //end of shelter.save




    // Create your animals (in the client create callback)

      // Bonus tasks (in the animal create callback)
