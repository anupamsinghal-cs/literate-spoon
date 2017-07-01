//==================================================== Server ==============================================================================================================================================------------------------------------------------->
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var database       = require('./public/config/database');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var path           = require('path');
var session		   = require('express-session');
var http           = require('http');




//***************************************************** Configurations ***************************************************************************************
mongoose.connect(database.localUrl); 							    // Connect to local MongoDB instance.
app.use(express.static(path.join(__dirname, './public')));
app.use(morgan('dev')); 									   	  // log every request to the console
app.use(bodyParser.json()); 									// parse application/json


//***************************************************************************************************************************************************

require('./app/routes.js')(app);

//***************************************************************************************************************************************************
app.listen(3000, function () {
   console.log('Example app listening on port 3000!')
})

//=======================================================================================================================================================------------------------------------------------>
