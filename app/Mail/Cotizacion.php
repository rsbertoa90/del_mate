<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class Cotizacion extends Mailable
{
   use Queueable, SerializesModels;

    public $order;
   
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($order,$config)
    {
        $this->order = $order ;
        $this->config=$config;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('delmatedistribuidora@gmail.com')->subject('Recibimos tu pedido!')->view('mails.cotizacion')
            ->with(['order'=>$this->order, 'config'=>$this->config]);
    }
}
