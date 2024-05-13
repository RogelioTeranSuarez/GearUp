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
        Transaction::create(['transaction_type' => '','date' => '','total' => '','employees_id' => '']);
        Transaction::create(['transaction_type' => '','date' => '','total' => '','employees_id' => '']);
        Transaction::create(['transaction_type' => '','date' => '','total' => '','employees_id' => '']);
        Transaction::create(['transaction_type' => '','date' => '','total' => '','employees_id' => '']);
        Transaction::create(['transaction_type' => '','date' => '','total' => '','employees_id' => '']);
        Transaction::create(['transaction_type' => '','date' => '','total' => '','employees_id' => '']);
        Transaction::create(['transaction_type' => '','date' => '','total' => '','employees_id' => '']);
        Transaction::create(['transaction_type' => '','date' => '','total' => '','employees_id' => '']);
    }
}
