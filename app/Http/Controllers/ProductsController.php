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
        $students = DB::table('products')->get();
        return $students;
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

                'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:20240',
                'categories_id' => 'required|exists:categories,id',
                'suppliers_id' => 'required|exists:suppliers,id',
                'car_models_id' => 'required|exists:car_models,id',
            ]);

            
            $image = $request->file('image');

            $path = $image->store('');


            $product = Product::create([
                'name' => $request->input('name'),
                'description' => $request->input('description'),
                'price' => $request->input('price'),
                'Image' => $path->input('image'),
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

            return response()->json(["success" => 'Product updated: ' . $product], 200);
        } catch (Exception $e) {
            return response()->json(['error' => 'An error occurred when trying to update: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
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
