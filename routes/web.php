<?php

use App\Http\Controllers\UserController;

Route::inertia('/', 'Home');

Route::resource('users', UserController::class)
    ->only(['index', 'create', 'store']);

Route::inertia('/settings', 'Settings');
