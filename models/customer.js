const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
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
  address : {
    type : String,
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

let CUSTOMER = mongoose.model('customer',customerSchema)

module.exports = CUSTOMER