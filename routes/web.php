<?php

use App\Http\Controllers\UserController;

Route::inertia('/', 'Home')
    ->name('home');

Route::resource('users', UserController::class)
    ->only(['index', 'create', 'store', 'edit']);

Route::inertia('/settings', 'Settings')
    ->name('settings');
