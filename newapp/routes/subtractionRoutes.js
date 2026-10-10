const express = require('express');
const router = express.Router();

// new route for subtracting two numbers
router.get('/sub', (req, res) => {
res.send('Subtract')
})

module.exports = router;