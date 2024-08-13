const mongoose = require('mongoose');

// Define the schema
const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  dueDate: { type: String }
});

// Create the model
const User = mongoose.model('User', userSchema);

module.exports = User;
