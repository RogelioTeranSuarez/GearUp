<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions_has_products', function (Blueprint $table) {
            $table->id();

            $table->foreignId('transactions_id')->nullable()->constrained('transactions')->onUpdate('SET NULL')->onDelete('CASCADE');
            $table->foreignId('products_id')->nullable()->constrained('products')->onUpdate('SET NULL')->onDelete('CASCADE');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions_has_products');
    }
};
