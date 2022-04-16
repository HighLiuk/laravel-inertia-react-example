<?php

Route::get('/', function () {
    return inertia('Home', [
        'name' => 'Luca',
        'frameworks' => [
            'Laravel',
            'React',
            'Inertia',
        ],
    ]);
});
