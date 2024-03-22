const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  customerID : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer"
  },
  vehicleID : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "vehicle"
  },
  technicianID : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "technician"
  },
  appointmentDate : {
    type : String,
    require : true
  },
  notes : {
    type : String,
    require : true
  }
});

let APPOINTMENT = mongoose.model('appointment',appointmentSchema)

module.exports = APPOINTMENT