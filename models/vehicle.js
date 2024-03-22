const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  customerID : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer"
  },
  model : {
    type : String,
    require : true
  },
  year : {
    type : String,
    require : true
  },
  licensePlate : {
    type : String,
    require : true
  }
});

let VEHICLE = mongoose.model('vehicle',vehicleSchema)

module.exports = VEHICLE