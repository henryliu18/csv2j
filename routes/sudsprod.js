const express = require('express');
const router = express.Router();

const { 
    srm, 
    ovm_file1, 
    ovm_file2, 
    itopsa
} = require('../controllers/sudsprod');

router.route('/SRM').get(srm);
router.route('/OVM/file1').get(ovm_file1);
router.route('/OVM/file2').get(ovm_file2);
router.route('/ITOPSA').get(itopsa);

module.exports = router;
