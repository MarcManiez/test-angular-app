const mongoose = require('mongoose');

const EntrySchema = new mongoose.schema({
  name: String,
  dob: Date
});

module.exports = mongoose.model('Entry', EntrySchema);