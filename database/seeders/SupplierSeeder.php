<?php

namespace Database\Seeders;

use App\Models\Supplier;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SupplierSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Supplier::create(['name' => 'Nissan', 'address' => '123 Cherry St, New York, NY 10001', 'Phone' => '(212) 555-1234']);
        Supplier::create(['name' => 'Chevrolet', 'address' => '456 Maple Ave, Los Angeles, CA 90001', 'Phone' => '(213) 555-5678']);

        Supplier::create(['name' => 'Renault', 'address' => '789 Oak Ln, Chicago, IL 60601', 'Phone' => '(312) 555-9012']);
        Supplier::create(['name' => 'Ford', 'address' => '321 Pine Ct, Houston, TX 77001', 'Phone' => '(713) 555-3456']);

        Supplier::create(['name' => 'Volkswagen', 'address' => '654 Elm Dr, Phoenix, AZ 85001', 'Phone' => '(602) 555-7890']);
        Supplier::create(['name' => 'Kia', 'address' => '987 Cedar Pl, Philadelphia, PA 19101', 'Phone' => '(215) 555-1234']);

        Supplier::create(['name' => 'Mazda', 'address' => '345 Spruce Blvd, San Antonio, TX 78201', 'Phone' => '(210) 555-5678']);
        Supplier::create(['name' => 'Hyundai', 'address' => '678 Redwood Pkwy, San Diego, CA 92101', 'Phone' => '(619) 555-9012']);
        
        Supplier::create(['name' => 'Toyota', 'address' => '910 Birch Rd, Dallas, TX 75201', 'Phone' => '(214) 555-3456']);
        Supplier::create(['name' => 'Dodge', 'address' => '234 Willow St, San Jose, CA 95101', 'Phone' => '(408) 555-7890']);

        Supplier::create(['name' => 'Jeep', 'address' => '567 Poplar Ave, Austin, TX 78701', 'Phone' => '(512) 555-1234']);
        Supplier::create(['name' => 'RAM', 'address' => '890 Alder Ln, Jacksonville, FL 32201', 'Phone' => '(904) 555-5678']);
    }
}
