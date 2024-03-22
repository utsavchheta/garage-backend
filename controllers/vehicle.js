var VEHICLE = require('../models/vehicle')
var jwt = require('jsonwebtoken');

// sequre
exports.sequre = async function (req, res, next) {
  try {

    let token = req.headers.vehicletoken
    if(!token){
      throw new Error('Please Send Vehicle Token')
    }

    var decoded = jwt.verify(token, 'SURAT');

    req.vehicleID = decoded.id

    let vehicleCheck = await VEHICLE.findById(decoded.id)
    if(!vehicleCheck){
      throw new Error('vehicle Not Found')
    }

    next()
  }
  catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

// vehicle Create
exports.vehicleCreate = async function (req, res, next) {
  try {

    req.body.customerID = req.customerID

    let vehicleCreate = await VEHICLE.create(req.body)

    var token = jwt.sign({ id: vehicleCreate._id }, 'SURAT');

    res.status(201).json({
      status: "Success",
      message: "vehicle Data Create Successfully",
      data: vehicleCreate,
      token
    })
  }
  catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

// vehicle Find
exports.vehicleFind = async function (req, res, next) {
  try {

    let data = await VEHICLE.find()

    res.status(201).json({
      status: "Success",
      message: "vehicle Data Get Successfully",
      data
    })
    
  }
  catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

// vehicle Delete
exports.vehicleDelete = async function (req, res, next) {
  try {

    let vehicleDelete = await VEHICLE.findByIdAndDelete(req.params.deleteId)
    if(!vehicleDelete){
      throw new Error('vehicle Not Found')
    }

    res.status(201).json({
      status: "Success",
      message: "vehicle Delete Successfully",
      data : vehicleDelete
    })

  }
  catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

// vehicle Update
exports.vehicleUpdate = async function (req, res, next) {
  try {

    let vehicleUpdate = await VEHICLE.findByIdAndUpdate(req.params.updateId , req.body)
    if(!vehicleUpdate){
      throw new Error('vehicle Not Found')
    }

    res.status(201).json({
      status: "Success",
      message: "vehicle Update Successfully",
      data : vehicleUpdate
    })

  }
  catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}