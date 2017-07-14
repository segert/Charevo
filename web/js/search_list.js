(function() {
    var app = angular.module('Demo', ['AxelSoft']);
    
    if (sessionStorage.getItem("Cyhack") === "true")
    {
    app.value('customSelectDefaults', {
                        displayText: 'Select a needless shortcut',
                        emptyListText: 'This thing here\'s empty',
                        emptySearchResultText: '"$0" doesn\'t match anything, stupid!',
                        addText: 'Add',
                        searchDelay: 300
                    });
                }
    
    app.controller('DemoController', ['$scope', function($scope) {

            $scope.state = 0;

            if (sessionStorage.getItem("Cyhack") === "true")
            {
            $scope.states = [
                {id: 'Charevo/Characters/beauty.html', name: 'Get a Haircut, Ya Hippie!'},
                {id: 'Charevo/Characters/tel-e.html', name: 'She Came From Outer Space!'},
                {id: 'Charevo/Characters/pyra.html', name: 'The Hot Girl (Disappointment Awaits)'},
                {id: 'Charevo/Characters/race.html', name: 'Ethnicity'},
                {id: 'Charevo/Characters/bendy.html', name: 'Bendy'},
                {id: 'Charevo/Characters/nator.html', name: 'Nator'},
                {id: 'Charevo/Characters/chieftrotterberg.html', name: 'Chief Trotterberg'},
                {id: 'Charevo/Characters/fourize.html', name: 'Fourize'},
                {id: 'Charevo/Characters/cyhack.html', name: 'Cyhack'},
                {id: 'Charevo/Characters/dinomight.html', name: 'Dinomight'},
                {id: 'Charevo/Characters/ninja.html', name: 'Ninja'},
                {id: 'Charevo/Characters/tammytime.html', name: 'Tammy Time'},
                {id: 'Charevo/characters.html', name: 'Characters'},
                {id: 'Charevo/beautystories.html', name: 'Beauty Stories'},
                {id: 'Charevo/beautyquizzes.html', name: 'Beauty Quizzes'},
                {id: 'Charevo/switchcharacter.html', name: 'Switch Character'},
                {id: 'Charevo/blog.html', name: 'Blog'},
                {id: 'Charevo/charevogene.html', name: 'Charevo Gene'}

            ];
        }
        else{
            $scope.states = [
                {id: 'Charevo/Characters/beauty.html', name: 'Beauty'},
                {id: 'Charevo/Characters/tel-e.html', name: 'Tel-E'},
                {id: 'Charevo/Characters/pyra.html', name: 'Pyra'},
                {id: 'Charevo/Characters/race.html', name: 'Race'},
                {id: 'Charevo/Characters/bendy.html', name: 'Bendy'},
                {id: 'Charevo/Characters/nator.html', name: 'Nator'},
                {id: 'Charevo/Characters/chieftrotterberg.html', name: 'Chief Trotterberg'},
                {id: 'Charevo/Characters/fourize.html', name: 'Fourize'},
                {id: 'Charevo/Characters/cyhack.html', name: 'Cyhack'},
                {id: 'Charevo/Characters/dinomight.html', name: 'Dinomight'},
                {id: 'Charevo/Characters/ninja.html', name: 'Ninja'},
                {id: 'Charevo/Characters/tammytime.html', name: 'Tammy Time'},
                {id: 'Charevo/characters.html', name: 'Characters'},
                {id: 'Charevo/beautystories.html', name: 'Beauty Stories'},
                {id: 'Charevo/beautyquizzes.html', name: 'Beauty Quizzes'},
                {id: 'Charevo/switchcharacter.html', name: 'Switch Character'},
                {id: 'Charevo/blog.html', name: 'Blog'},
                {id: 'Charevo/charevogene.html', name: 'Charevo Gene'}

            ];
        }
            $scope.goToPage = function() {
                if($scope.state !== 0)
                    window.location.pathname = $scope.state;
            };



        }]);



})();