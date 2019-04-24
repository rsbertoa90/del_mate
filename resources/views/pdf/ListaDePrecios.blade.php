  @extends('pdf.base')

  @section('content')

 
  <main>
      
       

      @foreach ($categories as $category)
       {{-- <div class="breakNow"></div> --}}
          <hr>
          <div style="text-align: center ; width :100vw"></div>
              <h2> {{strtoupper($category->name)}} </h2>
          </div>
          <hr>                 
          
              <table class="table table-bordered table-striped"  >
                  <thead>
                      <tr>
                          <td>Codigo</td>
                          <td>Nombre</td>
                          <td>Precio</td>
                      </tr>
                    
                  </thead>
                  
                  <tbody>
                      
                      @foreach ($category->products as $key => $product)
                        @if (!$product->paused)
                            
                            <tr>
                                <td> {{$product->code}} </td>
                                <td> {{$product->name}} </td>
                                <td> ${{number_format($product->price,2)}} </td>  
                            </tr>
                        @endif
                      @endforeach
                  </tbody>
              </table>
      @endforeach
  </main>
      
     
  @endsection