var app = angular.module("todoApp", []);

app.controller("todoCtrl", function($scope) {
    $scope.todos = [
        { title: "Watch series", done: false },
        { title: "Work", done: false },
        { title: "Drink water or not", done: true}
    ];

    $scope.todoTitle = "";

    $scope.addTodo = function() {
        $scope.todos.push({ title: $scope.todoTitle, done: false });
        $scope.todoTitle = "";
    }

})