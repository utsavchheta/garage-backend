const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const technicianSchema = new Schema({
  fname : {
    type : String,
    require : true
  },
  lname : {
    type : String,
    require : true
  },
  contact : {
    type : Number,
    require : true
  },
  email : {
    type : String,
    require : true
  },
  password : {
    type : String,
    require : true
  }
});

let TECHNICIAN = mongoose.model('technician',technicianSchema)

module.exports = TECHNICIAN