(function() {
    var app = angular.module('Demo', ['AxelSoft']);
    app.controller('DemoController', ['$scope', function($scope) {

            $scope.state = 0;

            $scope.states = [
                {id: 'Charevo/Characters/beauty.html', name: 'Beauty'},
                {id: 'Charevo/Characters/tel-e.html', name: 'Tel-E'},
                {id: 'Charevo/Characters/pyra.html', name: 'Pyra'},
                {id: 'Charevo/Characters/race.html', name: 'Race'},
                {id: 'Charevo/Characters/bendy.html', name: 'Bendy'},
                {id: 'Charevo/Characters/nator.html', name: 'Nator'},
                {id: 'Charevo/Cities/minorcity.html', name: 'Minor City'},
                {id: 'Charevo/Cities/grincity.html', name: 'Grin City'},
                {id: 'Charevo/beautystories.html', name: 'Beauty Stories'},
                {id: 'Charevo/beautyquizzes.html', name: 'Beauty Quizzes'},
                {id: 'Charevo/charevogene.html', name: 'Charevo Gene'}

            ];
            $scope.goToPage = function() {
                if($scope.state !== 0)
                    window.location.pathname = $scope.state;
            };



        }]);



})();