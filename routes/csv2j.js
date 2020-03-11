const express = require('express');
const router = express.Router();

const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');
const csv=require('csvtojson');

router.use(fileUpload({
    createParentPath: true
}));


router.post('/upload', async (req, res) => {
    try {
        if(!req.files) {
            res.send({
                test: req,
                status: false,
                message: 'No file uploaded'
            });
        } else {
            let myfile = req.files.myfile;
            myfile.mv('./uploads/' + myfile.name);
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: myfile.name,
                    mimetype: myfile.mimetype,
                    size: myfile.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/:f', (req, res) => {
    //const csv = require('csvtojson')
    //const csvFilePath='/file-upload/uploads/vm_inventory.csv'
    const csvFilePath = './uploads/' + req.params.f
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            res.send(jsonObj);
        })
});

module.exports = router;
