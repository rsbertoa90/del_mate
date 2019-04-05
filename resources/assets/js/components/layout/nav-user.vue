<template>
         <nav class="navbar navbar-expand-lg navbar-dark bg-fucsia font-weight-bold">
                <router-link class="navbar-brand " to="/">
                    <v-lazy-image style="width:100px" src="/storage/images/app/logo.png" alt="Bazar Mayorista Maju" />
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon text-white"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item text-white">
                            <router-link class="nav-link text-white" to="/cotizador">
                                <span class="fa fa-shopping-cart"></span> Hace tu pedido <span class="sr-only">(current)</span>
                            </router-link>
                        </li>
           <!--              <li class="nav-item text-white">
                            <router-link class="nav-link text-white" to="/contacto">
                                <span class="fa fa-phone"></span>    Contactate con nosotros
                            </router-link>
                        </li> -->
                        <li class="nav-item text-white">
                             <a class="nav-link text-white" target="_blank" href="/MAJU-lista-de-precios.pdf" >
                                <span class="fa fa-download"></span> Descargar lista de precios
                            </a> 
                        </li>
                        <li class="nav-item text-white">
                            <a class="nav-link text-white" target="_blank" rel="noreferrer"
                                href="https://drive.google.com/file/d/1PRSqHX-70Eh7uAqOaF8xV-CAZ3BhqPL9/view">
                                <span class="fa fa-download"></span> Descargar catalogo digital
                            </a> 
                        </li>
                        
                    </ul>
                </div>
            </nav>
</template>

<style lang="scss">

.bg-fucsia{

background: rgba(76,76,76,1);
background: -moz-linear-gradient(left, rgba(76,76,76,1) 0%, rgba(17,17,17,1) 0%, rgba(102,102,102,1) 2%, rgba(71,71,71,1) 8%, rgba(89,89,89,1) 12%, rgba(0,0,0,1) 16%, rgba(44,44,44,1) 17%, rgba(43,43,43,1) 19%, rgba(28,28,28,1) 22%, rgba(255,32,128,1) 97%, rgba(255,32,128,1) 100%);
background: -webkit-gradient(left top, right top, color-stop(0%, rgba(76,76,76,1)), color-stop(0%, rgba(17,17,17,1)), color-stop(2%, rgba(102,102,102,1)), color-stop(8%, rgba(71,71,71,1)), color-stop(12%, rgba(89,89,89,1)), color-stop(16%, rgba(0,0,0,1)), color-stop(17%, rgba(44,44,44,1)), color-stop(19%, rgba(43,43,43,1)), color-stop(22%, rgba(28,28,28,1)), color-stop(97%, rgba(255,32,128,1)), color-stop(100%, rgba(255,32,128,1)));
background: -webkit-linear-gradient(left, rgba(76,76,76,1) 0%, rgba(17,17,17,1) 0%, rgba(102,102,102,1) 2%, rgba(71,71,71,1) 8%, rgba(89,89,89,1) 12%, rgba(0,0,0,1) 16%, rgba(44,44,44,1) 17%, rgba(43,43,43,1) 19%, rgba(28,28,28,1) 22%, rgba(255,32,128,1) 97%, rgba(255,32,128,1) 100%);
background: -o-linear-gradient(left, rgba(76,76,76,1) 0%, rgba(17,17,17,1) 0%, rgba(102,102,102,1) 2%, rgba(71,71,71,1) 8%, rgba(89,89,89,1) 12%, rgba(0,0,0,1) 16%, rgba(44,44,44,1) 17%, rgba(43,43,43,1) 19%, rgba(28,28,28,1) 22%, rgba(255,32,128,1) 97%, rgba(255,32,128,1) 100%);
background: -ms-linear-gradient(left, rgba(76,76,76,1) 0%, rgba(17,17,17,1) 0%, rgba(102,102,102,1) 2%, rgba(71,71,71,1) 8%, rgba(89,89,89,1) 12%, rgba(0,0,0,1) 16%, rgba(44,44,44,1) 17%, rgba(43,43,43,1) 19%, rgba(28,28,28,1) 22%, rgba(255,32,128,1) 97%, rgba(255,32,128,1) 100%);
background: linear-gradient(to right, rgba(76,76,76,1) 0%, rgba(17,17,17,1) 0%, rgba(102,102,102,1) 2%, rgba(71,71,71,1) 8%, rgba(89,89,89,1) 12%, rgba(0,0,0,1) 16%, rgba(44,44,44,1) 17%, rgba(43,43,43,1) 19%, rgba(28,28,28,1) 22%, rgba(255,32,128,1) 97%, rgba(255,32,128,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#ff2080', GradientType=1 );

}
    .text-white{
        color:#fff;
       
    }


</style>