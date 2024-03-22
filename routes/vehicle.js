var express = require('express');
var router = express.Router();

var customerController = require('../controllers/customer')
var vehicleController = require('../controllers/vehicle')


router.post('/create', customerController.sequre , vehicleController.vehicleCreate );

router.get('/find', vehicleController.vehicleFind );

router.delete('/delete/:deleteId', vehicleController.vehicleDelete );

router.put('/update/:updateId', vehicleController.vehicleUpdate );


module.exports = router;