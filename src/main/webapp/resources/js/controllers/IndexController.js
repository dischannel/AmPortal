'use strict';

/**
 * HomeController
 */
var IndexController = function($scope, $http) {
	
	$scope.contact_phone = '+0756-888888';
	$scope.contact_mail = 'dischannel@msn.cn';
    $scope.fetchUsersList = function() {
        $http.get('users/userlist.json').success(function(userList){
            $scope.users = userList;
        });
    };

    $scope.addNewUser = function(newUser) {
        $http.post('users/addUser/' + newUser).success(function() {
            $scope.fetchUsersList();
        });
        $scope.userName = '';
    };

    $scope.removeUser = function(user) {
        $http.delete('users/removeUser/' + user).success(function() {
            $scope.fetchUsersList();
        });
    };

    $scope.removeAllUsers = function() {
        $http.delete('users/removeAllUsers').success(function() {
            $scope.fetchUsersList();
        });

    };

    $scope.fetchUsersList();
};