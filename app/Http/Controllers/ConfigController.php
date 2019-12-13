<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Config;
use Auth;
use Illuminate\Support\Facades\Cache;
class ConfigController extends Controller
{
     public function update(Request $request)
    {
        Cache::forget('configs');

        $config = Config::find(1);
        $field = $request->field;
        $config->$field = $request->value;
        $user = Auth::user();
        $config->user_id = $user->id;
        $config->save();
    }
    
    public function get()
    {
         return Cache::rememberForever('configs', function () {
             return Config::find(1);
        }); 
    }


    public function homeimg(Request $request)
    {
        Cache::forget('configs');
        $configs = Config::find(1);
        
        if($configs->homeimg)
        {
            $path = public_path().$configs->homeimg;
            if(file_exists($path))
            unlink($path);
        }

        $file = $request->file('image');
        if ($file){
           
            $ext = $file->getClientOriginalExtension();
            $str= strval(rand(1111,9999) );
            
            $path = $file->storeAs('/images/app/','homeimg'.$str.'.'.$ext);
            $configs->homeimg = '/storage/'.$path;
            $configs->save();
        }

    }

    public function changelogo(Request $request)
    {
        Cache::forget('configs');
        $configs = Config::find(1);
        
        if($configs->logo)
        {
            $path = public_path().$configs->logo;
            if(file_exists($path))
            unlink($path);
        }

        $file = $request->file('image');
        if ($file){
           
            $ext = $file->getClientOriginalExtension();
            $str= strval(rand(1111,9999) );
            
            $path = $file->storeAs('/images/app/','logo'.$str.'.'.$ext);
            $configs->logo = '/storage/'.$path;
            $configs->save();
        }

    }
}
