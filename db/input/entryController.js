const Entry = require('./entryModel');
const db = require('../db/input/entryModel');

module.exports = { 
  newLink: function (req, res, next) {
    const dob = new Date(req.body.year, req.body.month, req.body.day);
    const entry = new Entry({
      name: req.body,
      dob: dob
    });
    entry.save( (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log('saved:', data);
      }
    });
    
  }
};