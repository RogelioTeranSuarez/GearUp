<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Exception;

class TransactionsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tran = DB::table('transactions')->get();
        return $tran;
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
                'employesss_id' => 'required|exists:employees,id',
            ]);
    
            // Crear el producto sin incluir el campo de imagen
            $tran = Transaction::create([
                'transaction_type' => $request->input('transaction_type'),
                'date' => $request->input('date'),
                'total' => $request->input('total'),
                'employees_id' => $request->input('employees_id'),
            ]);
    
            return response()->json(['message' => 'Car model agregado: ' . $tran], 201);
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
            $tran = Transaction::findOrFail($id);
            return response()->json($tran);
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
