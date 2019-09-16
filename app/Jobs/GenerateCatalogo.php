<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Category;
use App\ProductImage;
use Carbon\Carbon;

use PDF;
use View;
use Dompdf\Dompdf;
use Illuminate\Support\Facades\Cache;
use Dompdf\Options;

class GenerateCatalogo implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    
    public $path;
    public $tries = 1;
    public $timeout = 3600;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($path)
    {
        //
        $this->path=$path;
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

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
     
     

       


        $categories =Category::with('products.images')
                    ->with(['products' => function($q){
                        $q->where('paused',0);
                    }])
                    ->whereHas('products' , function($q){
                $q->where('paused',0)->orderBy('name');
            })->orderBy('name')->get();
        
        foreach ($categories as  $c) {
            foreach ($c->products as $k=>$p) {
                if ($p->paused)
                {
                    unset($c->products[$k]);
                    
                } 
            }
        }


        $logo = $this->imageEmbed(public_path('/storage/images/app/logo.png'));
        $today = Carbon::now()->format('d/m/Y');
        $html = View::make('pdf.catalogo.Catalogo',compact('categories','today','logo'))->render();
        $path = $this->path;
        PDF::loadHTML($html)->save(public_path().$path); 

        
    }
}
