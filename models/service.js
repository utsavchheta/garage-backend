const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  image: {
    type: String,
    require: true
  },
  serviceName: {
    type: String,
    require: true
  },
  decription: {
    type: String,
    require: true
  },
  cost: {
    type: String,
    require: true
  }
});

let SERVICE = mongoose.model('service', serviceSchema)

module.exports = SERVICE