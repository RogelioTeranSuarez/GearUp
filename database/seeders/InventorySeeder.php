<?php

namespace Database\Seeders;

use App\Models\Inventory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InventorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Inventory::create(['quantity' => 20, 'cost_per_unit' => 59.99, 'date' => '2023-01-15', 'products_id' => 1]);
        Inventory::create(['quantity' => 12, 'cost_per_unit' => 69.99, 'date' => '2023-02-20', 'products_id' => 2]);
        Inventory::create(['quantity' => 35, 'cost_per_unit' => 39.99, 'date' => '2023-03-25', 'products_id' => 3]);
        Inventory::create(['quantity' => 12, 'cost_per_unit' => 30.99, 'date' => '2023-04-30', 'products_id' => 4]);
        Inventory::create(['quantity' => 12, 'cost_per_unit' => 19.99, 'date' => '2023-05-05', 'products_id' => 5]);

        Inventory::create(['quantity' => 8, 'cost_per_unit' => 10.99, 'date' => '2023-06-10', 'products_id' => 6]);
        Inventory::create(['quantity' => 23, 'cost_per_unit' => 7.99, 'date' => '2023-07-15', 'products_id' => 7]);
        Inventory::create(['quantity' => 54, 'cost_per_unit' => 10.99, 'date' => '2023-08-20', 'products_id' => 8]);
        Inventory::create(['quantity' => 21, 'cost_per_unit' => 8.99, 'date' => '2023-09-25', 'products_id' => 9]);
        Inventory::create(['quantity' => 8, 'cost_per_unit' => 15.99, 'date' => '2023-10-30', 'products_id' => 10]);

        Inventory::create(['quantity' => 8, 'cost_per_unit' => 50.99, 'date' => '2023-11-05', 'products_id' => 11]);
        Inventory::create(['quantity' => 6, 'cost_per_unit' => 80.99, 'date' => '2023-12-10', 'products_id' => 12]);
        Inventory::create(['quantity' => 5, 'cost_per_unit' => 99.99, 'date' => '2024-01-15', 'products_id' => 13]);
        Inventory::create(['quantity' => 10, 'cost_per_unit' => 59.99, 'date' => '2024-02-20', 'products_id' => 14]);
        Inventory::create(['quantity' => 12, 'cost_per_unit' => 100.56, 'date' => '2024-03-25', 'products_id' => 15]);

        Inventory::create(['quantity' => 20, 'cost_per_unit' => 79.99, 'date' => '2023-04-15', 'products_id' => 16]);
        Inventory::create(['quantity' => 16, 'cost_per_unit' => 50.99, 'date' => '2023-05-20', 'products_id' => 17]);
        Inventory::create(['quantity' => 4, 'cost_per_unit' => 69.99, 'date' => '2023-06-25', 'products_id' => 18]);
        Inventory::create(['quantity' => 18, 'cost_per_unit' => 39.99, 'date' => '2023-07-30', 'products_id' => 19]);
        Inventory::create(['quantity' => 17, 'cost_per_unit' => 30.99, 'date' => '2023-08-05', 'products_id' => 20]);

        Inventory::create(['quantity' => 1, 'cost_per_unit' => 97.54, 'date' => '2023-09-10', 'products_id' => 21]);
        Inventory::create(['quantity' => 54, 'cost_per_unit' => 36.78, 'date' => '2023-10-15', 'products_id' => 22]);
        Inventory::create(['quantity' => 32, 'cost_per_unit' => 59.99, 'date' => '2023-11-20', 'products_id' => 23]);
        Inventory::create(['quantity' => 13, 'cost_per_unit' => 79.99, 'date' => '2023-12-25', 'products_id' => 24]);
        Inventory::create(['quantity' => 13, 'cost_per_unit' => 119.99, 'date' => '2024-01-30', 'products_id' => 25]);

        Inventory::create(['quantity' => 5, 'cost_per_unit' => 100.00, 'date' => '2024-02-05', 'products_id' => 26]);
        Inventory::create(['quantity' => 24, 'cost_per_unit' => 29.99, 'date' => '2024-03-10', 'products_id' => 27]);
        Inventory::create(['quantity' => 12, 'cost_per_unit' => 29.99, 'date' => '2024-04-15', 'products_id' => 28]);
        Inventory::create(['quantity' => 53, 'cost_per_unit' => 119.99, 'date' => '2024-05-20', 'products_id' => 29]);
        Inventory::create(['quantity' => 33, 'cost_per_unit' => 79.99, 'date' => '2024-06-25', 'products_id' => 30]);
    }
}
