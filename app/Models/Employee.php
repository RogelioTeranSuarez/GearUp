<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $table = "employees";

    protected $fillable = ['first_name', 'last_name', 'address', 'phone', 'SSN', 'roles_id'];

    public function role()
    {
        return $this->belongsTo(Role::class);
    }
    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
}
