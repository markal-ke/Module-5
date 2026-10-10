const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
    res.send('This is a fake store of products!')   
})

module.exports = router;