var express = require('express');
var router = express.Router();

var serviceController = require('../controllers/service')
var technicianController = require('../controllers/technician')

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
})

const upload = multer({ storage: storage })


router.post('/create', technicianController.sequre, upload.single('image') , serviceController.serviceCreate);

router.get('/find', serviceController.serviceFind);

router.delete('/delete/:deleteId', serviceController.serviceDelete);

router.put('/update/:updateId', serviceController.serviceUpdate);


module.exports = router;