<?php

use Slim\Interfaces\RouteCollectorProxyInterface as Group;
use App\Controllers\UserController;

use Slim\App;

return function(App $app){

    $app->get('/', "App\Controllers\HomeController:home");
    
    $app->group('/users', function(Group $group){
            $group->post('/login', UserController::class . ":login");
            $group->post('/register', UserController::class . ":register");
    });

};

