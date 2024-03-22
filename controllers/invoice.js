var INVOICE = require('../models/invoice')


// invoice Create
exports.invoiceCreate = async function (req, res, next) {
  try {

    req.body.appointmentID = req.appointmentID

    let invoiceCreate = await (await INVOICE.create(req.body)).populate('appointmentID')

    res.status(201).json({
      status: "Success",
      message: "invoice Data Create Successfully",
      data: invoiceCreate
    })
  }
  catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

// invoice Find
exports.invoiceFind = async function (req, res, next) {
  try {

    let data = await INVOICE.find()

    res.status(201).json({
      status: "Success",
      message: "invoice Data Get Successfully",
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

// invoice Delete
exports.invoiceDelete = async function (req, res, next) {
  try {

    let invoiceDelete = await INVOICE.findByIdAndDelete(req.params.deleteId)
    if(!invoiceDelete){
      throw new Error('invoice Not Found')
    }

    res.status(201).json({
      status: "Success",
      message: "invoice Delete Successfully",
      data : invoiceDelete
    })

  }
  catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

// invoice Update
exports.invoiceUpdate = async function (req, res, next) {
  try {

    let invoiceUpdate = await INVOICE.findByIdAndUpdate(req.params.updateId , req.body)
    if(!invoiceUpdate){
      throw new Error('invoice Not Found')
    }

    res.status(201).json({
      status: "Success",
      message: "invoice Update Successfully",
      data : invoiceUpdate
    })

  }
  catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}