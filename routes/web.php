<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('admin.index');
})->where('any','.*');


