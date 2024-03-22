var express = require('express');
var router = express.Router();

var appointmentController = require('../controllers/appointment')
var customerController = require('../controllers/customer')
var vehicleController = require('../controllers/vehicle')
var technicianController = require('../controllers/technician')

// demo

router.post('/create', customerController.sequre , vehicleController.sequre , technicianController.sequre , appointmentController.appointmentCreate );

router.get('/find', appointmentController.appointmentFind );

router.delete('/delete/:deleteId', appointmentController.appointmentDelete );

router.put('/update/:updateId', appointmentController.appointmentUpdate );


module.exports = router;