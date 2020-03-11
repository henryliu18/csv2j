const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');
const csv=require('csvtojson');

// @desc    Get Json
// @route   GET /api/csv2j/:f
// @access  Public
exports.getJson = (req, res, next) => {
    const csvFilePath = './uploads/' + req.params.f
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            res.send(jsonObj);
        })
}

// @desc    Upload Csv
// @route   POST /api/csv2j/upload
// @access  Public
exports.uploadCsv = (req, res, next) => {
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
}
