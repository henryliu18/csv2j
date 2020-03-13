// @desc    Convert CSV to Json => Response Json
// @route   GET /api/csv2j/:f
// @access  Public
exports.getJson = (req, res, next) => {
    const csv=require('csvtojson');
    const fs = require('fs');
    const csvFilePath = './uploads/' + req.params.f
    if (fs.existsSync(csvFilePath)) {
        csv()
            .fromFile(csvFilePath)
            .then((jsonObj) => {
                res.send(jsonObj);
            });
    } else {
        res.status(400).send({
            status: false,
            message: 'File does not exist',
            data: req.params.f
        })
    }
}

// @desc    Upload file
// @route   POST /api/csv2j/upload
// @access  Public
exports.uploadCsv = (req, res, next) => {
    try {
        if (!req.files) {
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
