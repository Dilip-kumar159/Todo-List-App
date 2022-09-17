const express = require('express');

const router = express.Router();

// Routing the home.ejs
const homeController = require('../controllers/home_controller');

// routing the home view
router.get('/', homeController.home);

// routing for updating
router.post('/add-task', homeController.update);

// routing for deleting
router.post('/delete-task', homeController.del);


module.exports = router;