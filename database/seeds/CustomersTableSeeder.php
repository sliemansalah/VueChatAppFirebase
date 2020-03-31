<?php

use Illuminate\Database\Seeder;
use App\Customer;

class CustomersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Customer::create([
            'name' => 'Solayman Salah',
            'age' => 26,
            'email' => 'slieman2001@hotmail.com',
            'skills' =>json_encode([
                "angular"=>true,
                 "vue"=> true,
                 "react"=>false,
            ]),
            'status' =>true
        ]);
    }
}
