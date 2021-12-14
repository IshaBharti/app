var express = require('express');
let router = express.Router();



/* GET home page. */
router.get('/ques', function(req, res, next) {
    res.render('ques', { title: 'Express' });
});


module.exports = router;