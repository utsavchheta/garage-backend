var express = require('express');
var router = express.Router();

var technicianController = require('../controllers/technician')


router.post('/signup', technicianController.technicianSignup );

router.post('/login', technicianController.technicianlogin );

router.get('/find', technicianController.technicianFind );

router.delete('/delete/:deleteId', technicianController.technicianDelete );

router.put('/update/:updateId', technicianController.technicianUpdate );


module.exports = router;