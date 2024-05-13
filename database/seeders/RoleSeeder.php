<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create(['name' => 'Administrator','description' => 'As Administrator you can access to confidential information ant can make major changes in the web app']);
        Role::create(['name' => 'Employee','description' => 'As employye you have limited acces to information in the web app']);
    }
}
