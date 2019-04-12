<template>
    <div class="footer">
       
        
                <span> <fa-icon :icon="['fab','whatsapp']"></fa-icon> :11 4970 6452</span>
                <span>Mayorista Del Mate</span>
                 <span>Made by: Rodrigo Bertoa -- M<fa-icon icon="heart"></fa-icon>M WEB</span>
           
            
      
    </div>
</template>

<style scoped>
    .footer{
        display: flex;
        justify-content: space-around;
        background-color: #444;
        color:#fff;
        bottom:0;
        width: 100vw;
     
    margin-bottom: -2%;
    font-size: .7rem;
    padding: 5px;
    margin-left: -7%;
    }

    @media(max-width:600px){
        .footer{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
</style>