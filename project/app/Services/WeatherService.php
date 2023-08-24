<?php

namespace App\Services;

use Illuminate\Http\Client\Response;
use Illuminate\Support\Facades\Http;

class WeatherService
{
    private CONST WEATHER_URL = 'https://api.openweathermap.org';
    private CONST COORDINATE_PATH = '/geo/1.0/direct';

    private CONST WEATHER_PATH = '/data/2.5/forecast';

    /**
     * Get the city geo data
     *
     * @param string $cityName
     * @return Response
     */
    public function getCityCoordinates(string $cityName): Response
    {
        return Http::get(self::WEATHER_URL . self::COORDINATE_PATH . '?q='. $cityName .'&appid='. env('WEATHER_APP_ID'));
    }

    /**
     * Get the weather based on the latitude and longitude passed
     *
     * @param string $lat
     * @param string $lon
     * @return Response
     */
    public function getCityWeather(string $lat, string $lon): Response
    {
         return Http::get(self::WEATHER_URL . self::WEATHER_PATH . '?lat='. $lat .'&lon='. $lon .'&units=metric&appid='. env('WEATHER_APP_ID'));
    }
}
