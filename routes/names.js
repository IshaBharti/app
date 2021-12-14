var express = require('express');

let router = express.Router();

/* GET home page. */
router.get('/isha', function(req, res, next) {
    res.render('names', { title: 'Express' });
});


module.exports = router;