<?php

use App\Models\User;

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/users', function () {
    $users = User::all(['id', 'name']);

    return inertia('Users', compact('users'));
});

Route::get('/settings', function () {
    return inertia('Settings');
});

Route::post('/logout', function () {
    dd(request('foo'));
});
