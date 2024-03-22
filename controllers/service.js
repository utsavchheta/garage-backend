var SERVICE = require('../models/service')

// service Create
exports.serviceCreate = async function (req, res, next) {
  try {

    req.body.image = req.file.filename

    let serviceCreate = await SERVICE.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "service Data Create Successfully",
      data: serviceCreate
    })
  }
  catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

// service Find
exports.serviceFind = async function (req, res, next) {
  try {

    let data = await SERVICE.find()

    res.status(201).json({
      status: "Success",
      message: "service Data Get Successfully",
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

// service Delete
exports.serviceDelete = async function (req, res, next) {
  try {

    let serviceDelete = await SERVICE.findByIdAndDelete(req.params.deleteId)
    if(!serviceDelete){
      throw new Error('service Not Found')
    }

    res.status(201).json({
      status: "Success",
      message: "service Delete Successfully",
      data : serviceDelete
    })

  }
  catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

// service Update
exports.serviceUpdate = async function (req, res, next) {
  try {

    let serviceUpdate = await SERVICE.findByIdAndUpdate(req.params.updateId , req.body)
    if(!serviceUpdate){
      throw new Error('service Not Found')
    }

    res.status(201).json({
      status: "Success",
      message: "service Update Successfully",
      data : serviceUpdate
    })

  }
  catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}