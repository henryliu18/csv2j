const express = require('express');
const router = express.Router();

const { 
    feed1_file1,
    feed2_file2
} = require('../controllers/test');

router.route('/feed1/file1').get(feed1_file1);
router.route('/feed2/file2').get(feed2_file2);

module.exports = router;
