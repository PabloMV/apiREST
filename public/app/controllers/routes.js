app.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : './public/pages/home.php',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : '../../pages/curriculo.php',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : '../../pages/contato.php',
            controller  : 'contactController'
        });
});

// create the controller and inject Angular's $scope
app.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    $('title').text('Home | Sites | Hospedagem | Freelancer | Desenvolvimento WEB');
    $('meta[name="description"]').attr('content','Página inicial com destaques, novidades, E mais informações de produtos');
    $('meta[name="keywords"]').attr('content','Vianweb, programação, desenvolvimento web, applicativos, android, apple, pablo, viana');
});

app.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

app.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});