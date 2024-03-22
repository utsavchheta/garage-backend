var APPOINTMENT = require('../models/appointment')
var jwt = require('jsonwebtoken');

// sequre
exports.sequre = async function (req, res, next) {
  try {

    let token = req.headers.appointmenttoken
    if(!token){
      throw new Error('Please Send Appointment Token')
    }

    var decoded = jwt.verify(token, 'SURAT');

    req.appointmentID = decoded.id

    let appointmentCheck = await APPOINTMENT.findById(decoded.id)
    if(!appointmentCheck){
      throw new Error('Appointment Not Found')
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

// appointment Create
exports.appointmentCreate = async function (req, res, next) {
  try {

    req.body.customerID = req.customerID
    req.body.vehicleID = req.vehicleID
    req.body.technicianID = req.technicianID

    let appointmentCreate = await (await APPOINTMENT.create(req.body)).populate(['customerID' , 'vehicleID' , 'technicianID'])

    var token = jwt.sign({ id: appointmentCreate._id }, 'SURAT');

    res.status(201).json({
      status: "Success",
      message: "Appointment Data Create Successfully",
      data: appointmentCreate,
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

// appointment Find
exports.appointmentFind = async function (req, res, next) {
  try {

    let data = await APPOINTMENT.find()

    res.status(201).json({
      status: "Success",
      message: "appointment Data Get Successfully",
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

// appointment Delete
exports.appointmentDelete = async function (req, res, next) {
  try {

    let appointmentDelete = await APPOINTMENT.findByIdAndDelete(req.params.deleteId)
    if(!appointmentDelete){
      throw new Error('appointment Not Found')
    }

    res.status(201).json({
      status: "Success",
      message: "appointment Delete Successfully",
      data : appointmentDelete
    })

  }
  catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

// appointment Update
exports.appointmentUpdate = async function (req, res, next) {
  try {

    let appointmentUpdate = await APPOINTMENT.findByIdAndUpdate(req.params.updateId , req.body)
    if(!appointmentUpdate){
      throw new Error('appointment Not Found')
    }

    res.status(201).json({
      status: "Success",
      message: "appointment Update Successfully",
      data : appointmentUpdate
    })

  }
  catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}