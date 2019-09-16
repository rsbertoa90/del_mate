<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use PDF;
use Carbon\Carbon;
use App\Jobs\GeneratePricesList;
use App\Jobs\GenerateCatalogo;
use Queue;
use Illuminate\Support\Facades\Cache;

class PdfController extends Controller
{

      public function dispatchCatalogoJob()
    {
           if( Cache::has('catalogoBg'))
        {
            $url=Cache::get('catalogoBg');
            if(file_exists(public_path().$url)){

                unlink(public_path().$url);
            }
            Cache::forget('catalogoBg');
        }
        
        
      
       $date = str_slug(Carbon::now());
        $path= '/catalogoBg'.$date.'.pdf' ;
        Cache::forever('catalogoBg',$path);

        Queue::push(new GenerateCatalogo($path));

        return;
    }


    public function dispatchPricesListJob()
    {
      
        $date = str_slug(Carbon::now());
        $newPath = '/precios-'.$date.'.pdf';
        if(Cache::has('pricesList'))
        {
            if(file_exists(public_path().Cache::get('pricesList'))){
                unlink(public_path().Cache::get('pricesList'));
            }
            Cache::forget('pricesList');
        }
        Cache::forever('pricesList',$newPath); 
       
        Queue::push(new GeneratePricesList($newPath));

        return ;
    }


    public function imageEmbed($image)
    {
       

        // Read image path, convert to base64 encoding
        $imageData = base64_encode(file_get_contents($image));

        // Format the image SRC:  data:{mime};base64,{data};
        $src = 'data:'.mime_content_type($image).';base64,'.$imageData;

        // Echo out a sample image
       return $src;
    }


    public function downloadPricesList()
    {
        
        if (Cache::has('pricesList'))
        {
   
        
            return redirect(Cache::get('pricesList'));
        }
    }


      public function redirectCatalogoRaw()
    {
        $fileuri = Cache::get('catalogoBg');
        
        if ($fileuri)
        {
            return redirect($fileuri);
        }
        
    }

       public function redirectCatalogo()
    {
        if (Cache::has('catalogoUser'))
        {
            //return Cache::get('catalogoUser');
            return redirect(Cache::get('catalogoUser'));
        }
    }
       public function redirectCatalogoSinPrecios()
    {
        if (Cache::has('catalogoSinPrecios'))
        {
            //return Cache::get('catalogoUser');
            return redirect(Cache::get('catalogoSinPrecios'));
        }
    }


       public function replaceCatalogo(Request $request)
    {
/* 
        $catalogo = $request->file('file');
        $filename = $catalogo->getClientOriginalName();
        
        */
        
        $catalogo = $request->file('pdf');

      

            if (Cache::has('catalogoUser'))
            {
                $curl = Cache::get('catalogoUser');
                if( file_exists(public_path().$curl))
                {
                    unlink(public_path().$curl);
                }
    
                Cache::forget('catalogoUser');
            }
    
            
            $date = str_slug(Carbon::now());
            $curl = '/catalogo'.$date.'.pdf';
            //$tmp = $catalogo->getRealPath();
            //$path = public_path().$fileuri->url;
            $request->file('pdf')->move(public_path(), $curl);
            Cache::forever('catalogoUser',$curl);
    
            return $curl;
        

    }
       public function replaceCatalogoSinPrecios(Request $request)
    {
/* 
        $catalogo = $request->file('file');
        $filename = $catalogo->getClientOriginalName();
        
        */
        
        $catalogo = $request->file('pdf');

        if (Cache::has('catalogoSinPrecios'))
        {
            $curl = Cache::get('catalogoSinPrecios');
            if( file_exists(public_path().$curl))
            {
                unlink(public_path().$curl);
            }

            Cache::forget('catalogoSinPrecios');
        }

        
        $date = str_slug(Carbon::now());
        $curl = '/catalogoSP'.$date.'.pdf';
        //$tmp = $catalogo->getRealPath();
        //$path = public_path().$fileuri->url;
        $request->file('pdf')->move(public_path(), $curl);
        Cache::rememberForever('catalogoSinPrecios',function(){
            $date = str_slug(Carbon::now());
            $curl = '/catalogoSP'.$date.'.pdf';
            return $curl ;
        });

        return $curl;

    }
    




}
