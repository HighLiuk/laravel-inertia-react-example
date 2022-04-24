<?php

use App\Http\Controllers\UserController;

Route::inertia('/', 'Home');

Route::resource('users', UserController::class)
    ->only(['index', 'create']);

Route::inertia('/settings', 'Settings');
