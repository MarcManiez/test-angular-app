const Entry = require('./entryModel');
const db = require('../../server/server');

module.exports = { 
  newLink: function (req, res, next) {
    console.log('WE MADE IT!!?!');
    const dob = new Date(req.body.year, req.body.month, req.body.day);
    const entry = new Entry({
      name: req.body.name,
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