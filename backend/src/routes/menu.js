const express = require('express');
const { getMenuOptionsForDate } = require('../controllers/menu.js');

// Create a new router instance
const router = express.Router();

router.get('/:date', getMenuOptionsForDate);

module.exports = router;