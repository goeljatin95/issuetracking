app.config(($routeProvider,$locationProvider)=>{
    $locationProvider.hashPrefix('');
        $routeProvider.when('/',{
        templateUrl:'views/login.html'
    }).when('/tester',{
        templateUrl:'views/tester.html',
    }).when('/register',{
        templateUrl:'views/register.html',
    }).when('/developer',{
        templateUrl:'views/developer.html'
    })
    

})