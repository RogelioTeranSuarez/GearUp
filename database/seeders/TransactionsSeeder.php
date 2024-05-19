<?php

namespace Database\Seeders;

use App\Models\Transaction;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TransactionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Transaction::create(['transaction_type' => 'Purchase','date' => '2024-01-01','total' => '500.00','employees_id' => '1']);
        Transaction::create(['transaction_type' => 'Sale','date' => '2024-01-02','total' => '800.00','employees_id' => '2']);
        Transaction::create(['transaction_type' => 'Purchase','date' => '2024-01-03','total' => '700.00','employees_id' => '3']);
        Transaction::create(['transaction_type' => 'Sale','date' => '2024-01-04','total' => '1200.00','employees_id' => '4']);
        Transaction::create(['transaction_type' => 'Purchase','date' => '2024-01-05','total' => '900.00','employees_id' => '5']);
        Transaction::create(['transaction_type' => 'Sale','date' => '2024-01-06','total' => '1500.00','employees_id' => '6']);
        Transaction::create(['transaction_type' => 'Purchase', 'date' => '2024-01-07', 'total' => '1000.00', 'employees_id' => '7']);
        Transaction::create(['transaction_type' => 'Sale','date' => '2024-01-08','total' => '2000.00','employees_id' => '8']);
    }
}
