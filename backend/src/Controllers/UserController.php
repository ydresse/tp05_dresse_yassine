<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Firebase\JWT\JWT;

class UserController
{
    public function login(Request $request, Response $response, array $args): Response
    {
        $data = $request->getParsedBody();
        $login = $data['login'] ?? "";
        $password = $data['password'] ?? "";

        if (!($login == $_ENV["LOGIN"] && $password == $_ENV["PASSWORD"])) {

            $response->getBody()->write(json_encode(["success" => false]));
            return $response->withHeader("Content-Type", "application/json");
        }

        $issueAt = time();
        $payload = [
            "user_id" => 0,
            "iat" => $issueAt,
            "exp" => $issueAt + 60
        ];
        $tokenJWT = JWT::encode($payload, $_ENV["JWT_SECRET"], "HS256");

        $response->getBody()->write(json_encode([
            "success" => true,
            "user" => [
                "id" => 0
            ]
        ]));

        return $response->withHeader("Authorization", $tokenJWT)
                ->withHeader('Content-Type', 'application/json')
                ->withHeader('Authorization', 'Bearer ' . $token_jwt)
                ->withStatus(200);
    }

    public function register(Request $request, Response $response, array $args): Response
    {
        $data = $request->getParsedBody();
        $result = [
            "success" => true,
            "user" => $data
        ];
        $response->getBody()->write(json_encode($result));
        return $response->withHeader("Content-Type", "application/json")->withStatus(201);
    }
}
