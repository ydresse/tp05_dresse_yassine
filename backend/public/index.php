<?php
use Slim\Factory\AppFactory;
use Dotenv\Dotenv;
require __DIR__ . '/../vendor/autoload.php';


// Load env variables
$dotenv = Dotenv::createImmutable(__DIR__ . "/..");
$dotenv->load();

// Create app
$app = AppFactory::create();

// Load routes
$routes = require __DIR__ . '\..\app\routes.php';
$routes($app);

$app->run();

?>