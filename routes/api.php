<?php

use App\Http\Controllers\Car_modelsController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\EmployeesController;
use App\Http\Controllers\InventoryController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\SuppliersController;
use App\Http\Controllers\TransactionsController;
use App\Http\Controllers\AuthenticationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\UserController;

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

Route::post('login', [AuthenticationController::class, 'login']);

Route::get('/wel', function () {
})->name('welcome');

Route::middleware('auth')->post('logout', [AuthenticationController::class, 'logout']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->group(function () {

    Route::post('/register', [UserController::class, 'register']);
    Route::get('/user', [UserController::class, 'user_index']);
    Route::delete('/users/deleteByEmail/{email}', [UserController::class, 'deleteByEmail']);

    Route::get('/products', [ProductsController::class, 'index']);
    Route::get('/products/{id}', [ProductsController::class, 'show']);
    Route::post('/productsAdd', [ProductsController::class, 'store']);
    Route::post('/productsUPDT/{id}', [ProductsController::class, 'update']);
    Route::put('/products/{id}', [ProductsController::class, 'update']);
    Route::post('/products/{id}/upload', [ProductsController::class, 'upload']);
    Route::delete('/products/{id}', [ProductsController::class, 'destroy']);

    Route::get('/categories', [CategoriesController::class, 'index']);
    Route::get('/categories/{id}', [CategoriesController::class, 'show']);
    Route::post('/categories', [CategoriesController::class, 'store']);
    Route::put('/categories/{id}', [CategoriesController::class, 'update']);
    Route::delete('/categories/{id}', [CategoriesController::class, 'destroy']);

    Route::get('/suppliers', [SuppliersController::class, 'index']);
    Route::get('/suppliers/{id}', [SuppliersController::class, 'show']);
    Route::post('/suppliers', [SuppliersController::class, 'store']);
    Route::post('/suppliers/{id}', [SuppliersController::class, 'update']);
    Route::delete('/suppliers/{id}', [SuppliersController::class, 'destroy']);

    Route::get('/carModel', [Car_modelsController::class, 'index']);
    Route::get('/carModel/{id}', [Car_modelsController::class, 'show']);
    Route::post('/carModel', [Car_modelsController::class, 'store']);
    Route::put('/carModel/{id}', [Car_modelsController::class, 'update']);
    Route::delete('/carModel/{id}', [Car_modelsController::class, 'destroy']);

    Route::get('/employees', [EmployeesController::class, 'index']);
    Route::get('/employees/{id}', [EmployeesController::class, 'show']);
    Route::post('/employees', [EmployeesController::class, 'store']);
    Route::put('/employees/{id}', [EmployeesController::class, 'update']);
    Route::delete('/employees/{id}', [EmployeesController::class, 'destroy']);

    Route::get('/roles', [RolesController::class, 'index']);
    Route::get('/roles/{id}', [RolesController::class, 'show']);
    Route::post('/roles', [RolesController::class, 'store']);
    Route::put('/roles/{id}', [RolesController::class, 'update']);

    Route::get('/inventory', [InventoryController::class, 'index']);
    Route::get('/inventory/{id}', [InventoryController::class, 'show']);
    Route::post('/inventory', [InventoryController::class, 'store']);
    Route::put('/inventory/{id}', [InventoryController::class, 'update']);

    Route::get('/transactions', [TransactionsController::class, 'index']);
    Route::get('/transactions/{id}', [TransactionsController::class, 'show']);
    Route::post('/transactions', [TransactionsController::class, 'store']);
    Route::delete('/transactions/{id}', [TransactionsController::class, 'destroy']);
});

