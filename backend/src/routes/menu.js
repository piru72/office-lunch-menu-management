const express = require('express');
const { getMenuOptionsForDate , createMenuOption } = require('../controllers/menu.js');

// Create a new router instance
const router = express.Router();

router.post('/', createMenuOption);
router.get('/:date', getMenuOptionsForDate);

module.exports = router;