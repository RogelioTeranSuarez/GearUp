<?php

namespace Database\Seeders;

use App\Models\Employee;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EmployeesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Employee::create(['first_name' => 'John', 'last_name' => 'Doe', 'address' => '123 Cherry St, New York, NY 10001', 'phone' => '(212) 555-1234', 'SSN' => '123-45-6789', 'roles_id' => 1]);
        Employee::create(['first_name' => 'Jane', 'last_name' => 'Smith', 'address' => '456 Maple Ave, New York, NY 10001', 'phone' => '(213) 555-5678', 'SSN' => '987-65-4321', 'roles_id' => 2]);
        Employee::create(['first_name' => 'Robert', 'last_name' => 'Johnson', 'address' => '789 Oak Ln, New York, NY 10001', 'phone' => '(312) 555-9012', 'SSN' => '234-56-7891', 'roles_id' => 1]);
        Employee::create(['first_name' => 'Mary', 'last_name' => 'Williams', 'address' => '321 Pine Ct, New York, NY 10001', 'phone' => '(713) 555-3456', 'SSN' => '876-54-3212', 'roles_id' => 2]);
        Employee::create(['first_name' => 'James', 'last_name' => 'Brown', 'address' => '654 Elm Dr, New York, NY 10001', 'phone' => '(602) 555-7890', 'SSN' => '345-67-8912', 'roles_id' => 1]);
        Employee::create(['first_name' => 'Patricia', 'last_name' => 'Jones', 'address' => '987 Cedar Pl, New York, NY 10001', 'phone' => '(215) 555-1234', 'SSN' => '765-43-2102', 'roles_id' => 2]);
        Employee::create(['first_name' => 'Michael', 'last_name' => 'Miller', 'address' => '345 Spruce Blvd, New York, NY 10001', 'phone' => '(210) 555-5678', 'SSN' => '456-78-9123', 'roles_id' => 2]);
        Employee::create(['first_name' => 'Linda', 'last_name' => 'Davis', 'address' => '678 Redwood Pkwy, New York, NY 10001', 'phone' => '(619) 555-9012', 'SSN' => '654-32-1098', 'roles_id' => 2]);
        Employee::create(['first_name' => 'William', 'last_name' => 'Garcia', 'address' => '910 Birch Rd, New York, NY 10001', 'phone' => '(214) 555-3456', 'SSN' => '567-89-1234', 'roles_id' => 2]);
        Employee::create(['first_name' => 'Elizabeth', 'last_name' => 'Martinez', 'address' => '234 Willow St, New York, NY 10001', 'phone' => '(408) 555-7890', 'SSN' => '678-90-1234', 'roles_id' => 2]);
    }
}
