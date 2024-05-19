<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Models\Employee;
use Illuminate\Http\Request;
use Exception;

class EmployeesController extends Controller
{
    /**
     * Display a listing of the resource.
     */

     public function index()
     {
         $students = DB::table('employees')->get();
         return $students;
     }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'roles_id' => 'required|exists:roles,id',
            ]);
    
            // Crear el employeeo sin incluir el campo de imagen
            $employee = Employee::create([
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'address' => $request->input('address'),
                'phone' => $request->input('phone'),
                'email' => $request->input('email'),
                'SSN' => $request->input('SSN'),
                'roles_id' => $request->input('roles_id'),
            ]);
    
            return response()->json(['message' => 'employeeo agregado: ' . $employee], 201);
        } catch (Exception $e) {
            return response()->json(['error' => 'Se produjo un error al intentar almacenar: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $employee = Employee::findOrFail($id);
            return response()->json($employee);
        } catch (Exception $e) {
            return response()->json(['error' => 'Se produjo un error al intentar mostrar: ' . $e->getMessage()], 500);
        }
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $employee = Employee::findOrFail($id);
            $data = $request->only([
                'first_name',
                'last_name',
                'address',
                'phone',
                'email',
                'SSN',
                'roles_id',
            ]);
    
            $employee->fill($data);
            $employee->save();
    
            return response()->json(["success" => 'employee updated successfully'], 200);
        } catch (\Throwable $e) {
            return response()->json(['error' => 'An error occurred when trying to update: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $employee = Employee::findOrFail($id);
            $employee->delete();
            
            return response()->json(["success" => 'categorie deleted successfully.'], 200);
        } catch (Exception $e) {
            return response()->json(['error' => 'An error occurred when trying to delete: ' . $e->getMessage()], 500);
        }
    }
}
