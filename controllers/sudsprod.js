// @desc    SRM feed (latest)
// @route   GET /SRM
// @access  Public
exports.srm = (req, res, next) => {
    const csv = require('csvtojson');
    const fs = require('fs');
    const csvFilePath = './uploads/SRM_latest.csv';
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

// @desc    OVM feed1
// @route   GET /OVM/filename1
// @access  Public
exports.ovm_file1 = (req, res, next) => {
    res.send("OVM todo filename1");
}

// @desc    OVM feed2
// @route   GET /OVM/filename2
// @access  Public
exports.ovm_file2 = (req, res, next) => {
    res.send("OVM todo filename2");
}

// @desc    ITOPSA feed
// @route   GET /ITOPSA
// @access  Public
exports.itopsa = (req, res, next) => {
    res.send("ITOPSA todo");
}
