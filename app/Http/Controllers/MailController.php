<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\Cotizacion;
use App\Mail\Aviso;
use App\Order;
use App\Product;
use App\OrderProduct;
use Mail;
use PDF;
use Carbon\Carbon;
use View;

class MailController extends Controller
{

    public static function mailAdmin($email){
                    Mail::to('delmatedistribuidora@gmail.com')
                    ->bcc('jalbsanchez@gmail.com')
                    ->send($email);
  }




    public function cotizacion(Request $request)
    {
        $request->validate([
            'email'=>'required|email',
            'list'=>'required'
            ]);
             
      $products = json_decode($request->list);
      $phone = $request->phone;
      $message = $request->message;
      $email = $request->email;
      $total = $request->total;
            
      $order = Order::create([
          'email'=>$email,
          'phone'=>$phone,
          'message'=>$request->message,
          'name'=>$request->name,
          'source'=>'user'
      ]);

      foreach ($products as $p)
      {
         
        if ($p->units >= $p->pck_units){
            $price = $p->pck_price;
        }else {
            $price = $p->price;
        }
        OrderProduct::create([
              'product_id' => $p->id,
              'order_id'=>$order->id,
              'units'=>$p->units,
              'price'=>$price,
              ]);
      }

      $order = Order::find($order->id);
      $config = Config::find(1); 

      Mail::to($order->email)
            ->send(new Cotizacion($order,$config));

       self::mailAdmin(new Aviso());
            
          
    }

    
}
