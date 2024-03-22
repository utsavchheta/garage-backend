var express = require('express');
var router = express.Router();

var appointmentController = require('../controllers/appointment')
var invoiceController = require('../controllers/invoice')


router.post('/create', appointmentController.sequre , invoiceController.invoiceCreate );

router.get('/find', invoiceController.invoiceFind );

router.delete('/delete/:deleteId', invoiceController.invoiceDelete );

router.put('/update/:updateId', invoiceController.invoiceUpdate );


module.exports = router;