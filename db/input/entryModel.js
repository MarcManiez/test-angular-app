const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
  name: String,
  dob: Date
});

module.exports = mongoose.model('Entry', EntrySchema);