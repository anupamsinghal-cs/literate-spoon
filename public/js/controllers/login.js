

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if (username.length == 0 && password.length == 0){
	document.getElementById("error_message").setAttribute('style','display:block;');
}
else if ( username == "iot" && password == "iot"){
//alert ("Login successfully");
document.getElementById("error_message").setAttribute('style','display:none;');
//window.location = "./views/register.html"; // Redirecting to other page.
window.location.assign("/register")
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have "+attempt+" attempts left.");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}

