@extends('mails.base')

@section('content')

    <div>
        <p>Hola {{$order->name}}! recibimos tu pedido. 
            Nos estaremos comunicando con vos a la brevedad para confirmar tu presupuesto. </p>
        </p> 
        <p>
            Te dejamos nuestro nro de contacto por cualquier consulta
            <ul>
                <li>Whatsapp: 11 2708 2683</li>
                <li>Tel fijo: (11) 4970 6452. Saludos!</li>
            </ul>    
        </p> 
        
        <p>
            Si queres descargar una copia en pdf de tu pedido hace click en el siguiente enlace:
        </p>
        <p>
            <a href="https://back.mayoristadelmate.com/pdf/{{$order->id}}">   Descargar copia de pedido  </a>
        </p>

        <p>
            Gracias por elegir Bazar Mayorista del Mate!
        </p>

    </div>

 
  

   
@endsection