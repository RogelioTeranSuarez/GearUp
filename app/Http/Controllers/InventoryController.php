<?php

namespace App\Http\Controllers;


use Illuminate\Support\Facades\DB;
use App\Models\Inventory;
use Exception;
use Illuminate\Http\Request;

class InventoryController extends Controller
{
        /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $inventory = DB::table('inventory')->get();
        return $inventory;
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
                'products_id' => 'required|exists:products,id',
            ]);
    
            // Crear el producto sin incluir el campo de imagen
            $inventory = Inventory::create([
                'quantity' => $request->input('quantity'),
                'cost_per_unit' => $request->input('cost_per_unit'),
                'date' => $request->input('date'),
                'products_id' => $request->input('products_id'),
            ]);
    
            return response()->json(['message' => 'Car model agregado: ' . $inventory], 201);
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
            $inventory = Inventory::findOrFail($id);
            return response()->json($inventory);
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
            $inventory = Inventory::findOrFail($id);
            $data = $request->only([
                'quantity',
                'cost_per_unit',
                'date',
                'products_id',
            ]);
    
            $inventory->fill($data);
            $inventory->save();
    
            return response()->json(["success" => 'Car model updated successfully'], 200);
        } catch (\Throwable $e) {
            return response()->json(['error' => 'An error occurred when trying to update: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
    }
}
