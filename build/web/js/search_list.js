(function () {
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

    app.controller('DemoController', ['$scope', function ($scope) {

            $scope.page = 0;

            if (sessionStorage.getItem("Cyhack") === "true")
            {
                $scope.pages = [
                    {id: 'Charevo/Characters/beauty.html', name: 'Cosplay Girl'},
                    {id: 'Charevo/Characters/tel-e.html', name: 'She Came From Outer Space!'},
                    {id: 'Charevo/Characters/pyra.html', name: 'Generic Fire Girl Name'},
                    {id: 'Charevo/Characters/race.html', name: 'Ethnicity'},
                    {id: 'Charevo/Characters/bendy.html', name: 'Fantastic Fourgettable'},
                    {id: 'Charevo/Characters/nator.html', name: 'Sighborg'},
                    {id: 'Charevo/Characters/chieftrotterberg.html', name: 'I Could Just Scream'},
                    {id: 'Charevo/Characters/fourize.html', name: 'Glasses Guy Verb'},
                    {id: 'Charevo/Characters/cyhack.html', name: 'Mozetti, Mo Lovin\''},
                    {id: 'Charevo/Characters/dinomight.html', name: 'Large and White JJ Evans'},
                    {id: 'Charevo/Characters/ninja.html', name: 'Over the Counter Meditation'},
                    {id: 'Charevo/Characters/tammytime.html', name: 'Human Clown Car'},
                    {id: 'Charevo/characters.html', name: 'Story Talkers'},
                    {id: 'Charevo/beautystories.html', name: 'Girl Goes to Dangerous Town'},
                    {id: 'Charevo/beautyquizzes.html', name: 'Quick! What\'d You Read?'},
                    {id: 'Charevo/switchcharacter.html', name: 'Dump a Girl for Another'},
                    {id: 'Charevo/blog.html', name: 'Somethin\' in the Paper Today'},
                    {id: 'Charevo/charevogene.html', name: 'Charevo Gina Mozetti'},
                    {id: 'Charevo/author.html', name: 'Welcome to This Doofus .com'}

                ];
            }
            else {
                $scope.pages = [
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
                    {id: 'Charevo/charevogene.html', name: 'Charevo Gene'},
                    {id: 'Charevo/author.html', name: 'The Author'}

                ];
            }
            $scope.goToPage = function () {
                if ($scope.page !== 0)
                    window.location.pathname = $scope.page;
            };



        }]);



})();