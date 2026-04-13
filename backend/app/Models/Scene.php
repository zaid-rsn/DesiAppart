<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Scene extends Model
{
    protected $fillable = ['user_id', 'title', 'layout_data'];

    protected $casts = [
        'layout_data' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
