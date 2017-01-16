const Entry = require('./entryModel');
const db = require('../../server/server');
const moment = require('moment');

module.exports = { 
  newLink: function (req, res, next) {
    let dob = new Date(req.body.year, req.body.month, req.body.day);
    dob = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
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
    })
    .then(newEntry => {
      res.status(201).json(newEntry);
    })
    .catch(err => {
      next(err);
    }); 
  }
};