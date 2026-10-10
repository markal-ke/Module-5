const express = require('express');
const calculatorController = require('../controllers/calculatorController')
const router = express.Router();

router.get('/add', calculatorController.addNumbers)


router.get('/sub', calculatorController.subtractNumbers)


router.get('/mult', calculatorController.multiplyNumbers)


router.get('/div', calculatorController.divideNumbers)


module.exports = router;


