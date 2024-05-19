<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\DB;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categorie = DB::table('categories')->get();
        return $categorie;
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
            $categorie = Category::create([
                'name' => $request->input('name'),
            ]);
    
            return response()->json(['message' => 'Car model agregado: ' . $categorie], 201);
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
            $categorie = Category::findOrFail($id);
            return response()->json($categorie);
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
            $categorie = Category::findOrFail($id);
            $data = $request->only([
                'name',
            ]);
    
            $categorie->fill($data);
            $categorie->save();
    
            return response()->json(["success" => 'Car model updated successfully'], 200);
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
            $categorie = Category::findOrFail($id);
            $categorie->delete();
            
            return response()->json(["success" => 'categorie deleted successfully.'], 200);
        } catch (Exception $e) {
            return response()->json(['error' => 'An error occurred when trying to delete: ' . $e->getMessage()], 500);
        }
    }
}
