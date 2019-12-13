<?php

namespace App;
use App\Product;
use Illuminate\Database\Eloquent\SoftDeletes;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;


class Category extends Model
{
    use SoftDeletes;
    //
     protected $guarded =[];

    protected $attributes = [
       'description' => "",
    ];



    public function products()
    {
        return $this->hasMany(Product::class)->orderBy('prio')->orderBy('name');
    }

    public function setNameAttribute($name)
    {
        $this->attributes['name']=$name;
        $this->attributes['slug']='/'.str_slug($name);
        $this->save();
    }

    public static function notPaused()
    {
       return Cache::rememberForever('productsNotPaused', function () {
            return Category::with('products.images')
                    ->with(['products' => function($q){
                        $q->where('paused',0);
                    }])
                    ->whereHas('products' , function($q){
                $q->where('paused',0)->orderBy('name');
            })->orderBy('prio')->orderby('name')->get();
        });
        
    }


}
