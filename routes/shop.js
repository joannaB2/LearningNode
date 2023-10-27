const path = require('path');
const express = require('express');

const rootDir = require('../helpers/path');

const router = express.Router();

// dirname hold absolute path to our project (folder we use)
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;