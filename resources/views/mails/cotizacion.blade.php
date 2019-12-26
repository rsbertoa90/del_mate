@extends('mails.base')

@section('content')

    <div>
        <p>Hola {{$order->name}}! recibimos tu pedido. 
            Nos estaremos comunicando con vos a la brevedad para confirmar tu presupuesto. </p>
        </p> 
        <p>
            Te dejamos nuestro nro de contacto por cualquier consulta
            <br>

            Whatsapp: {{$config->wha}}
                
        </p> 
        
        <p>
            Si queres descargar una copia en pdf de tu pedido hace click en el siguiente enlace:
        </p>
        <p>
            <a href="https://back.mayoristadelmate.com/pdf/{{$order->id}}">   Descargar copia de pedido  </a>
        </p>

        <p>
            Gracias por elegir Mayorista del Mate!
        </p>

    </div>

 
  

   
@endsection