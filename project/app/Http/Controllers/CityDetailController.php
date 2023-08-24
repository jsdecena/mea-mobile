<?php

namespace App\Http\Controllers;

use App\Services\WeatherService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class CityDetailController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        $listOfCities = collect(CitiesController::CITY_LIST)->map(function ($item) {
            return $item['id'];
        })->all();

        $validator = Validator::make($request->all(), [
            'city' => [
                'required',
                Rule::in($listOfCities),
            ]
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 422);
        }

        $validatedFields = $validator->validated();

        $weatherService = new WeatherService();
        $response = $weatherService->getCityCoordinates($validatedFields['city']);

        $filteredResult = json_decode($response->body());

        return response()->json($filteredResult);
    }
}
