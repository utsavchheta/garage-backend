var TECHNICIAN = require('../models/technician')
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

// sequre
exports.sequre = async function (req, res, next) {
  try {

    let token = req.headers.techniciantoken
    if(!token){
      throw new Error('Please Send Technician Token')
    }

    var decoded = jwt.verify(token, 'SURAT');

    req.technicianID = decoded.id

    let technicianCheck = await TECHNICIAN.findById(decoded.id)
    if(!technicianCheck){
      throw new Error('technician Not Found')
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

// technician signup
exports.technicianSignup = async function (req, res, next) {
  try {

    req.body.password = await bcrypt.hash(req.body.password, 8)
    let technicianCreate = await TECHNICIAN.create(req.body)


    res.status(201).json({
      status: "Success",
      message: "technician Data signup Successfully",
      data: technicianCreate,
    })
  }
  catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}


// technician login
exports.technicianlogin = async function (req, res, next) {
  try {
    let formData = req.body
    let technicianemail = await TECHNICIAN.findOne({ email: formData.email })
    if (!technicianemail) {
        throw new Error("technician not found")
    }
    let passComp = await bcrypt.compare(formData.password,  technicianemail.password)
    if (!passComp) {
        throw new Error("Invalid Password")
    }
    var token = jwt.sign({ id: technicianemail._id }, 'SURAT');
    res.status(201).json({
        status: "success",
        message: " technician login successfully",
        data:  technicianemail,
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


// technician Find
exports.technicianFind = async function (req, res, next) {
  try {

    let data = await TECHNICIAN.find()

    res.status(201).json({
      status: "Success",
      message: "technician Data Get Successfully",
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

// technician Delete
exports.technicianDelete = async function (req, res, next) {
  try {

    let technicianDelete = await TECHNICIAN.findByIdAndDelete(req.params.deleteId)
    if(!technicianDelete){
      throw new Error('technician Not Found')
    }

    res.status(201).json({
      status: "Success",
      message: "technician Delete Successfully",
      data : technicianDelete
    })

  }
  catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

// technician Update
exports.technicianUpdate = async function (req, res, next) {
  try {

    let technicianUpdate = await TECHNICIAN.findByIdAndUpdate(req.params.updateId , req.body)
    if(!technicianUpdate){
      throw new Error('technician Not Found')
    }

    res.status(201).json({
      status: "Success",
      message: "technician Update Successfully",
      data : technicianUpdate
    })

  }
  catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}