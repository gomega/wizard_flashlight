'use strict';

wizardapp.controller('MainCtrl', function ($scope) {
    $scope.user = {};

    $scope.login = function(user){
    	if(user.username == 'vanne'){
    		if(user.pass == 'vanne'){
    			alert('Te has logueado');
    		}else{
    			alert('Usuario o Contraseña incorrecta');
    		}
    	}else{
    		alert('Usuario o Contraseña incorrecta');
    	}    	
    };

  });
