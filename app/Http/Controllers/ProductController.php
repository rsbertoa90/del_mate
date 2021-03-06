<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\ProductImage;
use App\Category;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use  Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Cache;
class ProductController extends Controller
{

      public function forgetCaches(){
         Cache::forget('productsNotPaused');
          Cache::forget('categories');
          Cache::forget('products');
    }


    public function getAll()
    {   
        return Cache::rememberForever('products', function () {
             return Product::with('images')->get();

        }); 
       
    }

    public function update(Request $request) 
    {
        $this->forgetCaches();

        $product = Product::find($request->product);
        $field = $request->field;
        if ($request->field == 'paused' || $request->field == 'offer'){
           $request->value = (int) ($request->value == 'true');
        }
        $product->$field = $request->value;
        $product->save();
        return $request->all();
    }

    public function uploadImage(Request $request)
    {
      
        
        $file = $request->file('image');
        
        

            
            $path = $file->storePublicly('/images/products');
            $path = '/storage/'.$path;
            $product = Product::find($request->product);
            
            $productImage = ProductImage::create([
                'url' => $path,
                'product_id' => $product->id
                ]);
            
              $this->forgetCaches();
                
       
        return;

    }

    public function create(Request $request)
    {
        $this->forgetCaches();

        
       $product = Product::create($request->except('_token'));
      $product->slug = str_slug($product->name);
      $product->save();
    }

    public function destroy($id)
    {
        $this->forgetCaches();
        $product = Product::find($id);
        $category = $product->category;
        
        $product->code = "del".$product->code;
        $product->save();
        $product->delete();

        
            if( $category->products->count() == 0){
                $category->delete();
            }
        

        return $category;

    }

    public function deleteImage(Request $request){
        $this->forgetCaches();
        $pi = ProductImage::find($request->id);
        $pi->delete();

      

    }

    public function setFirstImage(Request $request){
       $this->forgetCaches();
        $product =Product::find($request->product);

        foreach ($product->images as  $image) {
            if ($image->id == $request->first){
                $image->first = 1;
                $image->save();
            }else{
                $image->first = 0;
                $image->save();
            }
        }
    }
}
