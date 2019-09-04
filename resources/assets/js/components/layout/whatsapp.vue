<template>
    <div class="whatsapp">
        <a rel="noreferrer" class="d-flex" target="_blank" href="https://api.whatsapp.com/send?phone=5491149706452&text=Hola!%20te%20escribo%20desde%20la%20pagina%20web,%20tengo%20una%20pregunta" > 
             <fa-icon :icon="['fab','whatsapp']" class="icon"></fa-icon>  
             <span class="text"> ¿Te podemos ayudar? </span> 
       </a>
    </div>
</template>

<style scoped lang="scss">
     .whatsapp{
        position:fixed;
         
        bottom:5px;
        right:15px;
        z-index:110;
        background-color: #ff0aaf;
        border: 1px solid #ff0aaf;
        padding: 4px;
        a{color:#fff};
        
    }
    .fa-whatsapp{
      font-size: 1.3rem;
      color:#65BC54;
    }

    @media(min-width: 600px){
        .whatsapp{
            width:300px;
            font-size:1.3rem;
          

        }
        .fa-whatsapp{
            font-size: 1.5rem;
        }
    }

    @media(max-width:600px){
        .whatsapp{
            bottom:10px;
            left:0;
            width:100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            font-size:1.6rem;
            height: 55px;
            .icon{
                font-size:2rem;
                height: 100%;
                background-color: #fff;
                width:10%;
                height: 60px;
                padding:0 5px;
            }
            .text{
                margin-left:5%;
                width:80%;
                margin-top:5px;
            }
        }
    }
</style>