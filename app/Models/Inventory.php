<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    use HasFactory;

    protected $table = "inventory";

    protected $fillable = ['quantity', 'cost_per_unit', 'date', 'product_id'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
