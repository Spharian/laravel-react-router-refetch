<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Return index view for every routes but the API's ones
Route::get('{slug}', function () {
    return view('index');
})->where('slug', '(?!api)([A-z\d-\/_.]+)?');
