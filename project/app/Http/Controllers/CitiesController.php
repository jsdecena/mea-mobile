<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class CitiesController extends Controller
{
    // For demo purposes, we limit to selected NZ cities
    CONST CITY_LIST = [
        [
            "id" => "auckland",
            "name" => "Auckland",
        ],
        [
            "id" => "wellington",
            "name" => "Wellington",
        ],
        [
            "id" => "christchurch",
            "name" => "Christchurch",
        ],
        [
            "id" => "manukau-city",
            "name" => "Manukau City",
        ],
        [
            "id" => "waitakere",
            "name" => "Waitakere",
        ],
        [
            "id" => "northcote",
            "name" => "Northcote",
        ],
        [
            "id" => "hamilton",
            "name" => "Hamilton",
        ],
        [
            "id" => "tauranga",
            "name" => "Tauranga",
        ],
        [
            "id" => "lower-hutt",
            "name" => "Lower Hutt",
        ],
        [
            "id" => "napier",
            "name" => "Napier",
        ],
        [
            "id" => "porirua",
            "name" => "Porirua",
        ],
        [
            "id" => "rotorua",
            "name" => "Rotorua",
        ],
        [
            "id" => "new-plymouth",
            "name" => "New Plymouth",
        ],
        [
            "id" => "whangarei",
            "name" => "Whangarei",
        ],
        [
            "id" => "invercargill",
            "name" => "Invercargill",
        ],
        [
            "id" => "nelson",
            "name" => "Nelson",
        ],
        [
            "id" => "dunedin",
            "name" => "Dunedin",
        ],
    ];
    public function __invoke() : JsonResponse
    {
        return response()->json(self::CITY_LIST);
    }
}
