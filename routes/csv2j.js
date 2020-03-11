const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');

router.use(fileUpload({
    createParentPath: true
}));

const { getJson, uploadCsv } = require('../controllers/csv2j');

router.route('/:f').get(getJson);
router.route('/upload').post(uploadCsv);

module.exports = router;
