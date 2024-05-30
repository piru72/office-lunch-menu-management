const express = require('express');
const { getCurrentTimeWithSeconds } = require('../utils/utils.js');
const menuRoutes  = require('./menu.js');

// Create a new router instance
const router = express.Router();

// Root of the API
router.get('/', (req, res) => {
    const requestInboundTime = getCurrentTimeWithSeconds();
    res.json({
        message: 'Welcome to the API root!',
        requestInboundTime: requestInboundTime,
        requestOutboundTime: getCurrentTimeWithSeconds(),
    });
});

// Define route sets
const routeSets = [
    { prefix:'/menu' , routes:menuRoutes},
];



// Mount routes onto the main router
routeSets.forEach(({ prefix, routes }) => {
    router.use(prefix, routes);
});
module.exports = router;
