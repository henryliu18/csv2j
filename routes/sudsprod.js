const express = require('express');
const router = express.Router();

const { justademo } = require('../controllers/sudsprod');

router.route('/justademo').get(justademo);

module.exports = router;
