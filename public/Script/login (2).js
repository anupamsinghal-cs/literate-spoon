$(function() {

    $('#login-form-link').click(function(e) {
		$("#loginForm").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
 		$("#forgot-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#loginForm").fadeOut(100);
 		$("#forgot-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	 $('#forgotpwd').click(function(e) {
		 	$("#forgot-form").delay(100).fadeIn(100);
			$("#loginForm").fadeOut(100);
	 		$("#register-form").fadeOut(100);
			$('#register-form-link').removeClass('active');
			$('#login-form-link').removeClass('active');
			$(this).addClass('active');
			e.preventDefault();
		});
	 $("#loginForm").validate({
		 errorClass: "my-error-class",
		 validClass: "my-valid-class",
		 rules:{
			 uname:"required",
			 pwd:"required"
		 },
		 messages:{
			 uname:"Enter Username",
			 pwd:"Enter Password"
		 }
	 });
	 
	 
	 
	 $("#register-form").validate({
		 errorClass: "my-error-class",
		 validClass: "my-valid-class",
		 rules:{
			 user:{
				 required:true,
				 userValidate:true,
				
			 },
			 user_mobile_number:{
				 required:true,
				 mobileValidate: true
			 },
			 user_mail:{
				 required:true,
				 emailValidate: true
			 },
			 password:{
				 required:true,
				 pwdValidate:true
			 },
			 confirmpassword:{
				 required:true,
		 		equalTo: "#password"
			 }
		 },
		 messages:{
			 user:{
				 required:"Enter Username",
				 userValidate:"Enter valid Username of length 3-20." +
				 		"Alphabets,digits and underscore are only allowed." +
				 		" Username should not end with underscore or space."
					 
			 },
			 password:"Enter Password of length 3-20",
			 user_mail:"Enter valid Email Address",
			 confirmpassword:{
				 required:"Enter Password again",
				 equalTo:"Password Mismatch"
			 }
		 }
	 });
	 
	 $("#forgot-form").validate({
		 errorClass: "my-error-class",
		 validClass: "my-valid-class",
		 rules:{
			 email:"required"			
		 },
		 messages:{
			 email:"Enter Email address",		
		 }
	 });
	 
	 
	 var reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?){1}$/;
	 jQuery.validator.addMethod("emailValidate", function(value, element) {
		    return this.optional(element) || reg.test(value);
		}, "* Invalid email");
	 
	 var reguser = /(?=^.{3,20}$)^[a-zA-Z][a-zA-Z0-9]*[_]?[a-zA-Z0-9]+$/;
	 jQuery.validator.addMethod("userValidate", function(value, element) {
		    return this.optional(element) || reguser.test(value);
		}, "* Invalid username");
	 
	 var regpwd = /(?=^.{3,20}$)[^\s]/;
	 jQuery.validator.addMethod("pwdValidate", function(value, element) {
		    return this.optional(element) || regpwd.test(value);
		}, "* Enter Password of length 3-20");
	 
	 var userendswith = /(?!.*[_ ]$)/;
	 jQuery.validator.addMethod("userName", function(value, element) {
		    return this.optional(element) || reguser.test(value);
		}, "* Username should not end with underscore or space");
	 
	 var phone = /^[1-9][0-9]{9}$/ ;
	 jQuery.validator.addMethod("mobileValidate", function(value, element) {
		    return this.optional(element) || phone.test(value);
		}, "* Invalid phone number");
	 
	 
	 
});
