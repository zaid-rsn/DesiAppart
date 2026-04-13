<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $living = \App\Models\Category::create(['name' => 'Living Room', 'slug' => 'living-room']);
        $lighting = \App\Models\Category::create(['name' => 'Lighting', 'slug' => 'lighting']);
        $accessories = \App\Models\Category::create(['name' => 'Accessories', 'slug' => 'accessories']);

        \App\Models\Product::create([
            'name' => 'Classic Velvet Lounge',
            'description' => 'An elegant blue velvet sofa with golden legs. Perfect for modern living rooms.',
            'price' => 899.00,
            'model_url' => 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/couch-blue/model.gltf',
            'category_id' => $living->id,
        ]);

        \App\Models\Product::create([
            'name' => 'Industrial Floor Lamp',
            'description' => 'Sleek matte black floor lamp with adjustable head.',
            'price' => 149.00,
            'model_url' => 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/floor-lamp/model.gltf',
            'category_id' => $lighting->id,
        ]);
        
        \App\Models\Product::create([
            'name' => 'Scandi Coffee Table',
            'description' => 'Natural oak coffee table with clean lines.',
            'price' => 299.00,
            'model_url' => 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/coffee-table/model.gltf',
            'category_id' => $living->id,
        ]);
    }
}
