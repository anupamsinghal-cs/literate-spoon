//=============================================================================================================================================
var mongoose = require('mongoose'),
Schema = mongoose.Schema
//==============================================================================================================================================
var UserSchema = Schema({

	Fname           : String,
	Lname           : String,
	Dname			: String,
	Password 		: String,
	Confirm_Password: String,
	MobileNumber    : Number
});

module.exports = mongoose.model('regSchema',UserSchema);
//===============================================================================================================================================
