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
        Car_Model::create(['name' => 'Nissan Versa', 'suppliers_id' => 1]);
        Car_Model::create(['name' => 'Nissan Sentra', 'suppliers_id' => 1]);
        Car_Model::create(['name' => 'Nissan Rogue', 'suppliers_id' => 1]);

        /* Chevrolet */
        Car_Model::create(['name' => 'Chevrolet Aveo', 'suppliers_id' => 2]);
        Car_Model::create(['name' => 'Chevrolet Onix', 'suppliers_id' => 2]);
        Car_Model::create(['name' => 'Chevrolet Blazer', 'suppliers_id' => 2]);

        /* Renault */
        Car_Model::create(['name' => 'Renault Clio', 'suppliers_id' => 3]);
        Car_Model::create(['name' => 'Renault Megane', 'suppliers_id' => 3]);
        Car_Model::create(['name' => 'Renault Captur', 'suppliers_id' => 3]);

        /* Ford */
        Car_Model::create(['name' => 'Ford F-Series', 'suppliers_id' => 4]);
        Car_Model::create(['name' => 'Ford Mustang', 'suppliers_id' => 4]);
        Car_Model::create(['name' => 'Ford Explorer', 'suppliers_id' => 4]);

        /* Volkswagen */
        Car_Model::create(['name' => 'Volkswagen Golf', 'suppliers_id' => 5]);
        Car_Model::create(['name' => 'Volkswagen Passat', 'suppliers_id' => 5]);
        Car_Model::create(['name' => 'Volkswagen Tiguan', 'suppliers_id' => 5]);

        /* Kia */
        Car_Model::create(['name' => 'Kia Forte', 'suppliers_id' => 6]);
        Car_Model::create(['name' => 'Kia Sorento', 'suppliers_id' => 6]);
        Car_Model::create(['name' => 'Kia Sportage', 'suppliers_id' => 6]);

        /* Mazda */
        Car_Model::create(['name' => 'Mazda3', 'suppliers_id' => 7]);
        Car_Model::create(['name' => 'Mazda CX-5', 'suppliers_id' => 7]);
        Car_Model::create(['name' => 'Mazda MX-5 Miata', 'suppliers_id' => 7]);

        /* Hyundai */
        Car_Model::create(['name' => 'Hyundai Tucson', 'suppliers_id' => 8]);
        Car_Model::create(['name' => 'Hyundai Elantra', 'suppliers_id' => 8]);
        Car_Model::create(['name' => 'Hyundai Santa Fe', 'suppliers_id' => 8]);

        /* Toyota */
        Car_Model::create(['name' => 'Toyota Hilux', 'suppliers_id' => 9]);
        Car_Model::create(['name' => 'Toyota RAV4', 'suppliers_id' => 9]);
        Car_Model::create(['name' => 'Toyota Corolla', 'suppliers_id' => 9]);

        /* Dodge */
        Car_Model::create(['name' => 'Dodge Charger', 'suppliers_id' => 10]);
        Car_Model::create(['name' => 'Dodge Challenger', 'suppliers_id' => 10]);
        Car_Model::create(['name' => 'Dodge Durango', 'suppliers_id' => 10]);

        /* Jeep */
        Car_Model::create(['name' => 'Jeep Wrangler', 'suppliers_id' => 11]);
        Car_Model::create(['name' => 'Jeep Grand Cherokee', 'suppliers_id' => 11]);
        Car_Model::create(['name' => 'Jeep Renegade', 'suppliers_id' => 11]);

        /* RAM */
        Car_Model::create(['name' => 'RAM 1500', 'suppliers_id' => 12]);
        Car_Model::create(['name' => 'RAM 2500', 'suppliers_id' => 12]);
        Car_Model::create(['name' => 'RAM 3500', 'suppliers_id' => 12]);
    }
}
