<?php

use App\Http\Controllers\AuthController;
use App\Http\Middleware\AdminVerifyToken;
use App\Http\Middleware\EnsureTokenIsValid;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use PhpParser\Builder\Class_;

Route::get('/user', function (Request $request) {
    return  response()->json(['message' => 'API is working!']);;
});

// Route::get('/user1', function (Request $request) {
//     return  response()->json([AuthController::class, 'getAllUser']);;
// });

Route::get('/user1', [AuthController::class, 'getAllUser']);



Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
// Route::middleware('auth:sanctum')->group(function () {
Route::middleware(EnsureTokenIsValid::class)->group(function () {

    Route::put('/users', [AuthController::class, 'updateUser']);

    Route::get('/check-auth', function (Request $request) {
        return response()->json(['message' => 'Authenticated'], 200);
    });



    Route::post('/logout', [AuthController::class, 'logout']);
    Route::middleware(AdminVerifyToken::class)->group(function () {
        Route::get('/getAllUser', [AuthController::class, 'getAllUser']);
        Route::put('/usersByAdmin', [AuthController::class, 'updateUserByAdmin']);
        Route::delete('/users/{email}', [AuthController::class, 'deleteUser']);
    });
});
