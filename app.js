var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('express-flash')
var session = require('express-session');
var mysql = require('mysql')

var connection = require('./database/database')




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var namesRouter = require('./routes/names');
var quesRouter = require('./routes/ques')
var HisRouter = require("./routes/his")
var data = require('./routes/data')

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



const home = require('./routes/user')

app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', namesRouter);
app.use('/', quesRouter);
app.use('/', HisRouter);
app.use('/', data)


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     next(createError(404));
// });

// / error handler
app.use(function(req, res, next) {
    // set locals, only providing error in development
    // res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;