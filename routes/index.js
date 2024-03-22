var express = require('express');
var router = express.Router();

var customerController = require('../controllers/customer')


router.post('/customer/signup', customerController.customerSignup );

router.post('/customer/login', customerController.customerLogin );

router.get('/customer/find', customerController.sequre , customerController.customerFind );

router.delete('/customer/delete/:deleteId', customerController.customerDelete );

router.put('/customer/update/:updateId', customerController.customerUpdate );

module.exports = router;