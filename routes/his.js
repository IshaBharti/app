var express = require('express');
let router = express.Router();



/* GET home page. */
router.get('/his', function(req, res, next) {
    res.render('his', { title: 'Express' });
});


module.exports = router;