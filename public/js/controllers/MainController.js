//========================================================================================================================================================================----------------------------->
var app = angular.module('module1');
app.controller('MainController',['$scope','$http','IOT','$timeout','$location','$mdDialog','$route', function($scope, $http, IOT,$timeout,$location,$mdDialog,$route){


	//**************************************** Register Data **********************************************************************************************
	//**************************************** Register Data **********************************************************************************************
	//**************************************** Register Data **********************************************************************************************
$scope.validate = function(){
	var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if (username.length == 0 && password.length == 0){
	document.getElementById("error_message").setAttribute('style','display:block;');
}
else if ( username == "iot" && password == "iot"){
alert ("Login successfully");
document.getElementById("error_message").setAttribute('style','display:none;');
window.location.href = "./views/register.html"; // Redirecting to other page.
//window.location.assign("/register")
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
	$scope.register = function()
	{

		var store = {

			FNAME     		 : $scope.fname,
			LNAME     		 : $scope.lname,
			DNAME			 : $scope.dname,
			MOBILENUMBER   : $scope.mobileno

		}

		// call the create function from our service(returns a object)
		IOT.create(store).then(function (insertresponse) {

			if(insertresponse.data.success == true)
			{
				alert("Data has been saved successfully.");
				console.log("Data  inserted");
			}
			if(insertresponse.data.success == false)
			{
				alert("Data has not been saved.");
				console.log("Data not inserted");
			}

		}, function (error) {
			console.error(error);
		});

		$scope.fname ="";
		$scope.lname = "";
		$scope.dname = "";
		$scope.mobileno="";

	}
//*********************************************** Delete Data **********************************************************************
//*********************************************** Delete Data **********************************************************************
//*********************************************** Delete Data**********************************************************************
	$scope.delete = function()
	{
		IOT.deleteData($scope.fn).then(function (deleteresponse) {

			if(deleteresponse.data.success == true)
			{
					alert("Successfully erased.");
				console.log("Data  deleted");
			}
			if(deleteresponse.data.success == false)
			{
					alert("Erased failed.");
				console.log("Data not delete");
			}

		}, function (error) {
			console.error(error);
		});

		$scope.fn="";
	}
//*********************************************** Show Data **********************************************************************
//*********************************************** Show Data **********************************************************************
//*********************************************** Show Data **********************************************************************
	$scope.showdata = function()
	{
		
		$http({
			method: 'GET',
			url: 'http://localhost:3000/retrieve'
		}).then(function successCallback(response) {
			console.log("success",response);
			$scope.data=response.data;
			console.log("successD",$scope.data);
		}, function errorCallback(response) {
      console.log("Error");
		});

	}	//********************************************************************************************************************************************
}]);
//=========================================================================================================================================================================---------------------------->
