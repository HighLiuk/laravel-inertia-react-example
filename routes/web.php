<?php

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/users', function () {
    return inertia('Users');
});

Route::get('/settings', function () {
    return inertia('Settings');
});
