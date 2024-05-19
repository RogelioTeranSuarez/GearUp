<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Employee;
use App\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Obtén un rol específico (ejemplo: Administrator)
        $adminRole = Role::where('name', 'Administrator')->first();

        // Obtén un empleado específico (ejemplo: John Doe)
        $employee = Employee::where('email', 'JohnDoe@gmail.com')->first();

        // Crea un usuario con los datos del empleado y el rol
        if ($employee && $adminRole) {
            User::create([
                'name' => $employee->first_name . ' ' . $employee->last_name,
                'email' => $employee->email,
                'password' => Hash::make('password'), // Cambia esto por una contraseña segura
                'role_id' => $adminRole->id,
            ]);
        }
    }
}