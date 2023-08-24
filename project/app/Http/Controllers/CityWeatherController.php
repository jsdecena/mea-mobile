<?php

namespace App\Http\Controllers;

use App\Services\WeatherService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class CityWeatherController extends Controller
{
    public function __invoke(Request $request, WeatherService $weatherService): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'lat' => [
                'required',
                'string',
            ],
            'lon' => [
                'required',
                'string',
            ]
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 422);
        }

        $validatedFields = $validator->validated();

        $response = $weatherService->getCityWeather($validatedFields['lat'], $validatedFields['lon']);

        $filteredResult = json_decode($response->body());

        $collection = collect($filteredResult->list)->unique('dt')->all();

        return response()->json(['data' => $collection]);
    }
}
