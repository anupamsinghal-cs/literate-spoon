//========================================================================================================================================================================----------------------------->
var app = angular.module('module2');
app.controller('MainController',['$scope','$http','IOT','$timeout','$location','$mdDialog','$route', function($scope, $http, IOT,$timeout,$location,$mdDialog,$route){


	//**************************************** Register Data **********************************************************************************************
	//**************************************** Register Data **********************************************************************************************
	//**************************************** Register Data **********************************************************************************************
$scope.register = function()
	{

		var store = {

			FNAME     		 : $scope.fname,
			LNAME     		 : $scope.lname,
			DNAME			 : $scope.dname,
			PASSWORD          :$scope.password,
			CONFIRM_PASSWORD  :$scope.confirm_password,
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
		$scope.password = "";
		$scope.confirm_password = "";
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
