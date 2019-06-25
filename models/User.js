var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  // `name` must be unique and of type String
  username: {
    type: String,
    unique: true
  },

    password: { //saved in plain-text, VERY bad security
        type: String,
    }
},
{
  characters: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "Character"
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
