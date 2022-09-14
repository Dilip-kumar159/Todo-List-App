const express = require('express');

const router = express.Router();

// Routing the home.ejs
const homeController = require('../controllers/home_controller');

// routing the home view
router.get('/', homeController.home);

module.exports = router;