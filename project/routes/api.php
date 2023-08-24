<?php

use App\Http\Controllers\CitiesController;
use App\Http\Controllers\CityDetailController;
use App\Http\Controllers\CityWeatherController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/cities', CitiesController::class);
Route::post('/city-coordinates', CityDetailController::class);
Route::post('/city-weather', CityWeatherController::class);
