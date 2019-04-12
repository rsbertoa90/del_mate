<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Metadata;

class MetadataController extends Controller
{

     public function update(Request $request)
    {
        $field = $request->field;
        $meta = Metadata::find($request->id);
        $meta->$field = $request->value;
        $meta->save();
    }

    public function get($page)
    {   
        return Metadata::where('page',$page)->get()->first();
    }

     public function getAll(){
        $pages = ['home',
                  'cotizador',
                  'contacto',
                  'carrito'
                ];
        
        $res = [];

        foreach ($pages as $page)
        {
            $res[] = Metadata::findOrCreate($page);
        }

        return $res;
    }


    public function page($page)
    {
        $meta = Metadata::where('page',$page)->get()->first();
        return view('admin.metadatas',compact('meta'));
    } 


}
