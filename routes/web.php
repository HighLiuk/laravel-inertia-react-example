<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\UserController;

Route::middleware('guest')->group(function () {
    Route::resource('login', AuthenticatedSessionController::class)
        ->only(['index', 'store'])
        ->name('index', 'login');
});

Route::middleware('auth')->group(function () {
    Route::inertia('/', 'Home')
        ->name('home');

    Route::resource('users', UserController::class)
        ->only(['index', 'create', 'store', 'edit']);

    Route::inertia('/settings', 'Settings')
        ->name('settings');

    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');
});

Route::get('/logout', fn () => abort(404));
