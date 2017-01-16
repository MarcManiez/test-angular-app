const mongoose = require('mongoose');

const InputSchema = new mongoose.schema({
  name: String,
  dob: Date
});