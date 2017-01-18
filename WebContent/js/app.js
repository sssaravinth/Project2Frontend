var app = angular.module("myApp", [ "ngRoute" ]);

	app.config(function($routeProvider) {
		$routeProvider
		.when("/", {
			templateUrl : "main.html",
 			/* controller : "HomeController"  */
 		}).when("/chat", {
			templateUrl : "Chat.html",
			controller : "ChatController"
		}).when("/blog", {
			templateUrl : "Blog.html",
			controller : "BlogController"
		}).when("/forum", {
			templateUrl : "Forum.html",
			controller : "ForumController"
		}).when("/Signup", {
			templateUrl : "SignUp.html",
			controller : "SignUpController"
		}).when("/Login", {
			templateUrl : "Login.html",
			controller : "LogInController"
		}).when("/footer", {
			templateUrl : "footer.html",
			controller : "footerController"
		}).when("/header", {
			templateUrl : "header.html",
			controller : "headerController"
		})
		
	});
