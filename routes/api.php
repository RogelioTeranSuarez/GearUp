<?php

use App\Http\Controllers\Car_modelsController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\SuppliersController;
use App\Models\Inventory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/products', [ProductsController::class, 'index']);
Route::post('/productsAdd', [ProductsController::class, 'store']);
Route::put('/products/{id}', [ProductsController::class, 'update']);

Route::get('/categories', [CategoriesController::class, 'index']);
Route::get('/categories/{id}', [CategoriesController::class, 'show']);

Route::get('/supplier', [SuppliersController::class, 'index']);

Route::get('/carModel', [Car_modelsController::class, 'index']);
Route::get('/carModel/{id}', [Car_modelsController::class, 'show']);

Route::get('/inventory', [InventoryController::class, 'index']);