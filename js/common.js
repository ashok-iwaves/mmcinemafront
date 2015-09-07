var app = angular.module('myhome', []);
app.controller('customersCtrl', function($scope, $http) {
  //  $http.get("http://www.w3schools.com/angular/customers.php")
    //.success(function (response) {$scope.names = response.records;});
	var desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
    var listitem = {"records":[
		{'name':'Gobinath','img':'img/Anegan111.jpg','desc':desc},
		{'name':'vijay','img':'img/Bachalpseeflowers.jpg','desc':desc},
		{'name':'suriya','img':'img/green-nature-road-1280x800.jpg','desc':desc},
		{'name':'vijay','img':'img/Bachalpseeflowers.jpg','desc':desc},
		{'name':'vijay','img':'img/Bachalpseeflowers.jpg','desc':desc},
		{'name':'suriya','img':'img/Anegan111.jpg','desc':desc},
		{'name':'suriya','img':'img/Anegan111.jpg','desc':desc},
		{'name':'vijay','img':'img/Bachalpseeflowers.jpg','desc':desc},
		{'name':'suriya','img':'img/Anegan111.jpg','desc':desc},
		{'name':'vijay','img':'img/Bachalpseeflowers.jpg','desc':desc},
		{'name':'suriya','img':'img/green-nature-road-1280x800.jpg','desc':desc}]}
    $scope.names = listitem.records;
});

/*******************List Page*******************/