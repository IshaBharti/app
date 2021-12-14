var express = require('express');
const app = require('../app');
var router = express.Router();
const knex = require('../database/database')
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
// for routing
router.get('/users', (req, res, next) => {
        res.render("user")
    },

    // for post 
    router.post('/user', (req, res) => {
        var data_storing = {
            "Id": req.body.ID,
            "Name": req.body.Name,
            "Email": req.body.Email,
            "Password": req.body.Password,
            "Phone": req.body.Phone,
            "Date": req.body.Date
        }
        knex.select('*').from('details').where({ 'id': req.body.id }).then((data) => {
            if (data.length < 1) {
                knex('detais').insert(data_storing).then((data) => {
                    res.send('<h1>Data has been inserted succesfully...<h1>')
                    console.log("your data has been inserted succesful...")
                }).catch((err) => {
                    res.send({ "err": err.message })
                    console.log({
                        "err": err.message
                    })

                })
            }
        })
    }));

module.exports = router;