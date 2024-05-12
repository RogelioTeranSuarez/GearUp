<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Models\Car_Model;
use Exception;
use Illuminate\Http\Request;

class Car_modelsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $carModel = DB::table('car_models')->get();
        return $carModel;
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $carModel = Car_Model::findOrFail($id);
            return response()->json($carModel);
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
