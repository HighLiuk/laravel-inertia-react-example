<?php

use App\Models\User;

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/users', function () {
    $filter = request('search');
    $users = User::query()
        ->when($filter, function ($query, $search) {
            $query->where('name', 'like', "%$search%");
        })
        ->paginate(10, ['id', 'name'])
        ->withQueryString();


    return inertia('Users/Index', compact('users', 'filter'));
});

Route::get('/settings', function () {
    return inertia('Settings');
});

Route::post('/logout', function () {
    dd(request('foo'));
});
