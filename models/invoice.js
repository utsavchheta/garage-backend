const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
  appointmentID : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "appointment"
  },
  totalCost : {
    type : Number,
    require : true
  },
  paymentStatus : {
    type : String,
    enum : ["pending" , "done"],
    default : "Pending"
  },
  paymentDate : {
    type : String,
    require : true
  }
});

let INVOICE = mongoose.model('invoice',invoiceSchema)

module.exports = INVOICE