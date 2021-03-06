var mongoose = require('mongoose');
var connect = process.env.MONGODB_URI;

// If you're getting an error here, it's probably because
// your connect string is not defined or incorrect.
mongoose.connect(connect);

// Step 1: Write your schemas here!
// Remember: schemas are like your blueprint, and models
// are like your building!

var userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  documents: {
    type: Array
  },
  collabDocs: {
    type: Array
  }
});

var documentSchema = mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  collaborators: {
    type: Array
  }
});


// Step 2: Create all of your models here, as properties.
var User = mongoose.model('User', userSchema);
var Document = mongoose.model('Document', documentSchema);
// Step 3: Export your models object
module.exports = {
  User: User,
  Document: Document,
};
