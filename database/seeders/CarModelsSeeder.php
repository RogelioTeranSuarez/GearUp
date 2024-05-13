<?php

namespace Database\Seeders;

use App\Models\Car_Model;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CarModelsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /* Nissan */
        Car_Model::create(['name' => 'Nissan Versa']);
        Car_Model::create(['name' => 'Nissan Sentra']);
        Car_Model::create(['name' => 'Nissan Rogue']);

        /* Chevrolet */
        Car_Model::create(['name' => 'Chevrolet Aveo']);
        Car_Model::create(['name' => 'Chevrolet Onix']);
        Car_Model::create(['name' => 'Chevrolet Blazer']);

        /* Renault */
        Car_Model::create(['name' => 'Renault Clio']);
        Car_Model::create(['name' => 'Renault Megane']);
        Car_Model::create(['name' => 'Renault Captur']);

        /* Ford */
        Car_Model::create(['name' => 'Ford F-Series']);
        Car_Model::create(['name' => 'Ford Mustang']);
        Car_Model::create(['name' => 'Ford Explorer']);

        /* Volkswagen */
        Car_Model::create(['name' => 'Volkswagen Golf']);
        Car_Model::create(['name' => 'Volkswagen Passat']);
        Car_Model::create(['name' => 'Volkswagen Tiguan']);

        /* Kia */
        Car_Model::create(['name' => 'Kia Forte']);
        Car_Model::create(['name' => 'Kia Sorento']);
        Car_Model::create(['name' => 'Kia Sportage']);

        /* Mazda */
        Car_Model::create(['name' => 'Mazda3']);
        Car_Model::create(['name' => 'Mazda CX-5']);
        Car_Model::create(['name' => 'Mazda MX-5 Miata']);

        /* Hyundai */
        Car_Model::create(['name' => 'Hyundai Tucson']);
        Car_Model::create(['name' => 'Hyundai Elantra']);
        Car_Model::create(['name' => 'Hyundai Santa Fe']);

        /* Toyota */
        Car_Model::create(['name' => 'Toyota Hilux']);
        Car_Model::create(['name' => 'Toyota RAV4']);
        Car_Model::create(['name' => 'Toyota Corolla']);

        /* Dodge */
        Car_Model::create(['name' => 'Dodge Charger']);
        Car_Model::create(['name' => 'Dodge Challenger']);
        Car_Model::create(['name' => 'Dodge Durango']);

        /* Jeep */
        Car_Model::create(['name' => 'Jeep Wrangler']);
        Car_Model::create(['name' => 'Jeep Grand Cherokee']);
        Car_Model::create(['name' => 'Jeep Renegade']);

        /* RAM */
        Car_Model::create(['name' => 'RAM 1500']);
        Car_Model::create(['name' => 'RAM 2500']);
        Car_Model::create(['name' => 'RAM 3500']);
    }
}
