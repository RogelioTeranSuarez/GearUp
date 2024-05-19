<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Exception;
use App\Models\Product;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = DB::table('products')->get();
        return $products;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'categories_id' => 'required|exists:categories,id',
                'suppliers_id' => 'required|exists:suppliers,id',
                'car_models_id' => 'required|exists:car_models,id',
            ]);
    
            // Crear el producto sin incluir el campo de imagen
            $product = Product::create([
                'name' => $request->input('name'),
                'description' => $request->input('description'),
                'price' => $request->input('price'),
                'categories_id' => $request->input('categories_id'),
                'suppliers_id' => $request->input('suppliers_id'),
                'car_models_id' => $request->input('car_models_id'),
            ]);
    
            return response()->json(['message' => 'Producto agregado: ' . $product], 201);
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
            $product = Product::findOrFail($id);
            return response()->json($product);
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
            $product = Product::findOrFail($id);
            $data = $request->only([
                'name',
                'description',
                'price',
                'categories_id',
                'suppliers_id',
                'car_models_id',
            ]);
    
            $product->fill($data);
            $product->save();
    
            return response()->json(["success" => 'Product updated successfully'], 200);
        } catch (\Throwable $e) {
            return response()->json(['error' => 'An error occurred when trying to update: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $product = Product::findOrFail($id);
            $product->delete();
    
            return response()->json(["success" => 'Model deleted successfully.'], 200);
        } catch (\Illuminate\Database\QueryException $e) {
            if ($e->getCode() === '23000') { // Código de error de integridad referencial en MySQL
                return response()->json(['error' => 'Cannot delete this model because it is associated with one or more products.'], 400);
            }
            return response()->json(['error' => 'An error occurred when trying to delete: ' . $e->getMessage()], 500);
        } catch (Exception $e) {
            return response()->json(['error' => 'An error occurred when trying to delete: ' . $e->getMessage()], 500);
        }
    }

    public function upload(Request $request, string $id)
    {
        try {
            $product = Product::findOrFail($id);

            if ($request->hasFile('Image')) {
                $imagePath = $request->file('Image')->store('');
                $product->Image = $imagePath;
                $product->save();
            }

            return response()->json(["success" => 'Image uploaded: ' . $product], 200);
        } catch (Exception $e) {
            return response()->json(['error' => 'An error occurred when trying to upload: ' . $e->getMessage()], 500);
        }
    }
}
