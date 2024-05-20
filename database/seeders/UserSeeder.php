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
        // Obtén el rol de Administrador
        $adminRole = Role::where('name', 'Administrator')->first();

        // Verifica si el rol de administrador existe
        if ($adminRole) {
            // Obtén todos los empleados que son administradores
            $adminEmployees = Employee::where('roles_id', $adminRole->id)->get();

            // Itera sobre cada empleado administrador y crea una cuenta de usuario
            foreach ($adminEmployees as $employee) {
                User::create([
                    'name' => $employee->first_name . ' ' . $employee->last_name,
                    'email' => $employee->email,
                    'password' => Hash::make('password'), // Cambia esto por una contraseña segura
                    'role_id' => $adminRole->id,
                ]);
            }
        } else {
            // Opcional: manejar el caso en el que el rol de administrador no exista
            $this->command->error('Role Administrator does not exist. Please create the role first.');
        }
    }
}