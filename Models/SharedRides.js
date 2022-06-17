<<<<<<< HEAD
const mongoose = require("mongoose");

//the schema will define how will look like
const SharedRidesShema = new mongoose.Schema({
  chaufeur: {
    type: String,
  },
  client: {
    type: String,
  },
});

//the model will represent the db in mongoDB and have it to our schema that we created here
const SharedRidesModel = mongoose.model(
  "SharedRides",
  SharedRidesShema,
  "SharedRides"
);

module.exports = SharedRidesModel;
=======
const mongoose = require("mongoose");

//the schema will define how will look like
const SharedRidesShema = new mongoose.Schema({
  chaufeur: {
    type: String,
  },
  client: {
    type: String,
  },
});

//the model will represent the db in mongoDB and have it to our schema that we created here
const SharedRidesModel = mongoose.model(
  "SharedRides",
  SharedRidesShema,
  "SharedRides"
);

module.exports = SharedRidesModel;
>>>>>>> 01f8580dd5fce21a04fc6ef7c1e5047d87685aee
