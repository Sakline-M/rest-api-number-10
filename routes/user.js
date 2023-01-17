const express = require('express');
const { getAllUser,createUser } = require('../controllers/userController');


//init express
const router = express.Router();

//create router
router.get('/', getAllUser);
router.post('/', createUser);


//exports router
module.exports = router ;