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
  console.log("client1 created!",client1);

  var client2 = Client.create({
    name: "Rosanna Rossington",
    dob: new Date(1990, 01, 05),
    gender: "female"
  }, function (err, client2){
    if(err) console.error(err);
    console.log("client2 created!", client2);

    var animal1 = Animal.create({
      name: "Rupert",
      dob: new Date(2009, 09, 15),
      type: "cat",
      breed: "black and white",
      status: "adopted",
      owner: client1
    }, function (err, animal1){
      if(err) console.error(err);
      console.log("animal1 created!", animal1);

      var animal2 = Animal.create({
        name: "Cedric",
        dob: new Date(2015, 11, 25),
        type: "cat",
        breed: "tabby",
        status: "adopted",
        owner: client2
      }, function (err, animal2){
        if(err) console.error(err);
        console.log("animal2 created!", animal2);

        var animal3 = Animal.create({
          name: "Bob",
          dob: new Date(2015, 11, 25),
          type: "dog",
          breed: "Scottish terrier",
          status: "adopted",
          owner: client1
        }, function (err, animal3){
          if(err) console.error(err);
          console.log("animal3 created!", animal3);

          var animal4 = Animal.create({
            name: "Henry",
            dob: new Date(2015, 11, 25),
            type: "dog",
            breed: "pug",
            status: "adopted",
            owner: client2
          }, function(err, animal4){
            if(err) console.error(err);
            console.log("animal4 created!", animal4);

            var animal5 = Animal.create({
              name: "Polly",
              dob: Date(2005, 5, 12),
              type: "parrot",
              breed: "cockatoo",
              status: "orphaned",
            }, function(err, animal5){
              if(err) console.error(err);
              console.log("animal5 created!", animal5);

              var animal6 = Animal.create({
                name: "Mongo",
                dob: new Date(2005, 5, 12),
                type: "mongoose",
                breed: "mongoose",
                status: "orphaned",
              }, function(err, animal6){
                if(err) console.error(err);
                console.log("animal6 created!", animal6);

                var shelter = Shelter.create({
                  name: "Jason's Animal Shelter",
                  animals: [animal1, animal2, animal3, animal4, animal5, animal6],
                  clients: [client1,client2]
                }, function(err,shelter) {
                  if(err) console.error(err);
                  console.log("shelter created!",shelter);

                  Animal.find({type: "dog"}, "name",
                    function(err, dogs){
                      if(err) return console.log(err);
                      console.log(dogs);
                    });//end of Dogs query method

                  Animal.find({type: "cat", dob: { $gte: new Date(2014, 7, 15) }},
                    function(err, cats){
                      if(err) return console.log(err);
                      console.log(cats);
                    });//end of cats query method

                  Animal.findOneAndUpdate({type: "parrot"}, {$set:{name:"Chuckles"}}, {new: true},
                      function(err, parrot){
                      if(err) return console.log(err);
                      console.log(parrot);
                    });//end of parrot query method

                  Animal.findOneAndRemove({type: "mongoose"},
                      function(err, mongoose){
                      if(err) return console.log(err);
                      console.log(mongoose);
                    });//end of mongoose

                }); //end of Shelter Create Callback
              });//end of Animal6 Create Callback
            });//end of Animal5 Create Callback
          });//end of Animal4 Create Callback
        });//end of Animal3 Create Callback
      });//end of Animal2 Create Callback
    });//end of Animal1 Create Callback
  }); //end of Client2 Create Callback
}); //end of Client1 Create Callback

