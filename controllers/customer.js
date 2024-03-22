var CUSTOMER = require('../models/customer')
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

// sequre
exports.sequre = async function (req, res, next) {
  try {

    let token = req.headers.customertoken
    if (!token) {
      throw new Error('Please Send Customer Token')
    }
    var decoded = jwt.verify(token, 'SURAT');

    req.customerID = decoded.id

    let customerCheck = await CUSTOMER.findById(decoded.id)
    if (!customerCheck) {
      throw new Error('Customer Not Found')
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

// Customer signup
exports.customerSignup = async function (req, res, next) {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8)
    let customerCreate = await CUSTOMER.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "Customer Data Create Successfully",
      data: customerCreate,
    })
  }
  catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

// Customer login
exports.customerLogin = async function (req, res, next) {
  try {

    let formData = req.body
    let customeremail = await CUSTOMER.findOne({ email: formData.email })
    if (!customeremail) {
      throw new Error("customer not found")
    }
    let passComp = await bcrypt.compare(formData.password, customeremail.password)
    if (!passComp) {
      throw new Error("Invalid Password")
    }
    var token = jwt.sign({ id: customeremail._id }, 'SURAT');
    res.status(201).json({
      status: "success",
      message: " customer login successfully",
      data: customeremail,
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


// Customer Find
exports.customerFind = async function (req, res, next) {
  try {

    let data = await CUSTOMER.find()

    res.status(201).json({
      status: "Success",
      message: "Customer Data Get Successfully",
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

// Customer Delete
exports.customerDelete = async function (req, res, next) {
  try {

    let customerDelete = await CUSTOMER.findByIdAndDelete(req.params.deleteId)
    if (!customerDelete) {
      throw new Error('Customer Not Found')
    }

    res.status(201).json({
      status: "Success",
      message: "Customer Delete Successfully",
      data: customerDelete
    })

  }
  catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

// Customer Update
exports.customerUpdate = async function (req, res, next) {
  try {

    let customerUpdate = await CUSTOMER.findByIdAndUpdate(req.params.updateId, req.body)
    if (!customerUpdate) {
      throw new Error('Customer Not Found')
    }

    res.status(201).json({
      status: "Success",
      message: "Customer Update Successfully",
      data: customerUpdate
    })

  }
  catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}