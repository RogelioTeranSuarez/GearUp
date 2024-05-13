<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create(['name' => 'Batteries AX', 'description' => 'High performance car batteries.', 'price' => 79.99, 'image' => '', 'categories_id' => 1, 'suppliers_id' => 1, 'car_models_id' => 1]);
        Product::create(['name' => 'Batteries UX', 'description' => 'Reliable and durable car batteries.', 'price' => 89.99, 'image' => '', 'categories_id' => 1, 'suppliers_id' => 6, 'car_models_id' => 35]);
        Product::create(['name' => 'Brake Pads AX', 'description' => 'High quality brake pads for safe driving.', 'price' => 49.99, 'image' => '', 'categories_id' => 2, 'suppliers_id' => 3, 'car_models_id' => 8]);
        Product::create(['name' => 'Brake Pads UX', 'description' => 'Durable brake pads for long-lasting performance.', 'price' => 59.99, 'image' => '', 'categories_id' => 2, 'suppliers_id' => 9, 'car_models_id' => 3]);
        Product::create(['name' => 'Air Filters AX', 'description' => 'Efficient air filters for clean engine intake.', 'price' => 19.99, 'image' => '', 'categories_id' => 3, 'suppliers_id' => 11, 'car_models_id' => 6]);

        Product::create(['name' => 'Air Filters UX', 'description' => 'High performance air filters for improved fuel efficiency.', 'price' => 29.99, 'image' => '', 'categories_id' => 3, 'suppliers_id' => 4, 'car_models_id' => 25]);
        Product::create(['name' => 'Oil Filters AX', 'description' => 'Reliable oil filters for clean engine oil.', 'price' => 14.99, 'image' => '', 'categories_id' => 4, 'suppliers_id' => 2, 'car_models_id' => 13]);
        Product::create(['name' => 'Oil Filters UX', 'description' => 'Durable oil filters for long-lasting engine protection.', 'price' => 24.99, 'image' => '', 'categories_id' => 4, 'suppliers_id' => 12, 'car_models_id' => 9]);
        Product::create(['name' => 'Spark Plugs AX', 'description' => 'High quality spark plugs for reliable ignition.', 'price' => 9.99, 'image' => '', 'categories_id' => 5, 'suppliers_id' => 3, 'car_models_id' => 23]);
        Product::create(['name' => 'Spark Plugs UX', 'description' => 'Durable spark plugs for optimal engine performance.', 'price' => 19.99, 'image' => '', 'categories_id' => 5, 'suppliers_id' => 7, 'car_models_id' => 15]);

        Product::create(['name' => 'Tires AX', 'description' => 'High performance tires for safe and comfortable driving.', 'price' => 99.99, 'image' => '', 'categories_id' => 6, 'suppliers_id' => 8, 'car_models_id' => 1]);
        Product::create(['name' => 'Tires UX', 'description' => 'Durable tires for long-lasting use.', 'price' => 109.99, 'image' => '', 'categories_id' => 6, 'suppliers_id' => 5, 'car_models_id' => 22]);
        Product::create(['name' => 'Alternators AX', 'description' => 'Reliable alternators for consistent power supply.', 'price' => 149.99, 'image' => '', 'categories_id' => 7, 'suppliers_id' => 10, 'car_models_id' => 3]);
        Product::create(['name' => 'Alternators UX', 'description' => 'High performance alternators for optimal power generation.', 'price' => 159.99, 'image' => '', 'categories_id' => 7, 'suppliers_id' => 1, 'car_models_id' => 20]);
        Product::create(['name' => 'Radiators AX', 'description' => 'Efficient radiators for optimal engine cooling.', 'price' => 129.99, 'image' => '', 'categories_id' => 8, 'suppliers_id' => 8, 'car_models_id' => 27]);

        Product::create(['name' => 'Radiators UX', 'description' => 'High performance radiators for improved engine performance.', 'price' => 139.99, 'image' => '', 'categories_id' => 8, 'suppliers_id' => 2, 'car_models_id' => 5]);
        Product::create(['name' => 'Shock Absorbers AX', 'description' => 'Reliable shock absorbers for a smooth ride.', 'price' => 79.99, 'image' => '', 'categories_id' => 9, 'suppliers_id' => 9, 'car_models_id' => 32]);
        Product::create(['name' => 'Shock Absorbers UX', 'description' => 'Durable shock absorbers for long-lasting comfort.', 'price' => 89.99, 'image' => '', 'categories_id' => 9, 'suppliers_id' => 12, 'car_models_id' => 18]);
        Product::create(['name' => 'Timing Belts AX', 'description' => 'High quality timing belts for precise engine timing.', 'price' => 49.99, 'image' => '', 'categories_id' => 10, 'suppliers_id' => 7, 'car_models_id' => 17]);
        Product::create(['name' => 'Timing Belts UX', 'description' => 'Durable timing belts for long-lasting engine performance.', 'price' => 59.99, 'image' => '', 'categories_id' => 10, 'suppliers_id' => 3, 'car_models_id' => 7]);

        Product::create(['name' => 'Water Pumps AX', 'description' => 'Reliable water pumps for efficient engine cooling.', 'price' => 119.99, 'image' => '', 'categories_id' => 11, 'suppliers_id' => 10, 'car_models_id' => 8]);
        Product::create(['name' => 'Water Pumps UX', 'description' => 'High performance water pumps for optimal engine temperature.', 'price' => 129.99, 'image' => '', 'categories_id' => 11, 'suppliers_id' => 5, 'car_models_id' => 36]);
        Product::create(['name' => 'Fuel Pumps AX', 'description' => 'Efficient fuel pumps for consistent fuel supply.', 'price' => 99.99, 'image' => '', 'categories_id' => 12, 'suppliers_id' => 1, 'car_models_id' => 30]);
        Product::create(['name' => 'Fuel Pumps UX', 'description' => 'Reliable fuel pumps for optimal engine performance.', 'price' => 109.99, 'image' => '', 'categories_id' => 12, 'suppliers_id' => 4, 'car_models_id' => 21]);
        Product::create(['name' => 'Clutches AX', 'description' => 'High quality clutches for smooth gear shifting.', 'price' => 149.99, 'image' => '', 'categories_id' => 13, 'suppliers_id' => 6, 'car_models_id' => 18]);

        Product::create(['name' => 'Clutches UX', 'description' => 'Durable clutches for long-lasting performance.', 'price' => 159.99, 'image' => '', 'categories_id' => 13, 'suppliers_id' => 11, 'car_models_id' => 34]);
        Product::create(['name' => 'Ignition Coils AX', 'description' => 'Reliable ignition coils for consistent ignition.', 'price' => 39.99, 'image' => '', 'categories_id' => 14, 'suppliers_id' => 2, 'car_models_id' => 29]);
        Product::create(['name' => 'Ignition Coils UX', 'description' => 'High performance ignition coils for optimal engine performance.', 'price' => 49.99, 'image' => '', 'categories_id' => 14, 'suppliers_id' => 5, 'car_models_id' => 34]);
        Product::create(['name' => 'Exhaust Systems AX', 'description' => 'Efficient exhaust systems for reduced emissions.', 'price' => 199.99, 'image' => '', 'categories_id' => 15, 'suppliers_id' => 3, 'car_models_id' => 19]);
        Product::create(['name' => 'Exhaust Systems UX', 'description' => 'High performance exhaust systems for reduced emissions.', 'price' => 159.99, 'image' => '', 'categories_id' => 15, 'suppliers_id' => 4, 'car_models_id' => 20]);
    }
}
