'use strict';

/**
 * @ngdoc function
 * @name deffcomp2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the deffcomp2App
 */

(function() {
    var app = angular.module("deffcomp2App");

    var AuthorizationController = ['$scope', function($scope) {

    	var auth = this;

    	auth.loggedIn;
    	auth.user;

        function init() {
        	// make call to backend to authorize if user is logged
        	auth.loggedIn = true;
        	auth.user = {
        		name: 'Martin',
        		lastname: 'Sonesson',
        		id: 123
        	}
        }

        init();
    }];

    app.controller("AuthorizationController", AuthorizationController);
}());