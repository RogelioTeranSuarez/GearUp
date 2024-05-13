<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

    
        $this->call(CarModelsSeeder::class);
        $this->call(CategoriesSeeder::class);
        $this->call(RoleSeeder::class);

        $this->call(EmployeesSeeder::class);
        
       
        $this->call(SupplierSeeder::class);

        $this->call(ProductSeeder::class);
        $this->call(InventorySeeder::class);
        
        $this->call(TransactionsSeeder::class);
        
        
    }
}
