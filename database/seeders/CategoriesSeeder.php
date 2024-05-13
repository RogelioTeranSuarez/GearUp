<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create(['name' => 'Batteries']);
        Category::create(['name' => 'Brake Pads']);

        Category::create(['name' => 'Air Filters']);
        Category::create(['name' => 'Oil Filters']);

        Category::create(['name' => 'Spark Plugs']);
        Category::create(['name' => 'Tires']);

        Category::create(['name' => 'Alternators']);
        Category::create(['name' => 'Radiators']);

        Category::create(['name' => 'Shock Absorbers']);
        Category::create(['name' => 'Timing Belts']);

        Category::create(['name' => 'Water Pumps']);
        Category::create(['name' => 'Fuel Pumps']);

        Category::create(['name' => 'Clutches']);
        Category::create(['name' => 'Ignition Coils']);
        
        Category::create(['name' => 'Exhaust Systems']);
    }
}
