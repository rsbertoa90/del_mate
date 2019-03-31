<template>
<div v-if="product">
   
    <div v-if="product" class="product-card" >
        
        <div class="d-flex justify-content-center text-center">
            <span class="text-center title"> {{product.name | ucFirst}} </span>
        </div>
        <div  class="image-container">
           <v-lazy-image v-if="product.images[0]" class="image" :src="product.images[0].url" :alt="product.name" />
           <v-lazy-image v-else class="image" src="/storage/images/app/no-image.png" :alt="product.name" />
           
            <div v-if="config && !config.hide_prices" class="price-overlay">
               <span> ${{product.price |price}} </span>
            </div>
                     
        </div>
         
        <div class="row">
            <label class="col-4 quiero">Quiero</label>
            <input type="number" min="0" class="form-control col-7 quiero-input " v-model="product.units">
        </div>
      
    </div>
</div>
</template>

<script>
export default {
    props:['product'],
    data(){
        return{
            
            image:null,
            hovered:false,
            transition:true
        }
    },
    computed:{
         config(){return this.$store.getters.getConfig},
        
       
    },
   
    
   
   
}
</script>

<style lang="scss" scoped>


.product-card{
         border:1px solid #ccc; 
        padding:15px;
}

 .image-container{
        overflow: hidden;
        position:relative;
      /*   border:1px solid #ccc; */
        padding:15px;
        cursor: pointer;
        .image{
            width:100%;
        }
    }

.quiero{
    font-size:1.3rem;
    font-weight: bold;
}

.quiero-input{
    border:1px solid #000;
}

.price-overlay{
    position:absolute;
    z-index: 100;
    bottom:0;
    left:0;
    width:100%;
    
    display: flex;
    justify-content:center;
    align-items:flex-end;
    background-color:#111;
    color:#fff;
    font-size: 2rem;
    
}

.title{
    font-size:2rem;
}



.position-absolute{
    position: absolute;
}

.overlay{
        position:absolute;
        top:0;
        left:0;
        padding: 15px;
        z-index: 50;
       
}

.square{
    display: flex;
    width: 20px;
    height: 20px;
    margin:5px;
    padding:5px;
    border: 1px solid #ccc;
    cursor: pointer;
}
.selected-square{
    border:2px solid blue;
}

   

    /* .image:hover{
            transform: scale(1.2);
            transition: all 1s;
    } */

    .price-badge{
        position:absolute;
        top:5px;
        left:5px;
        background-color: #aaaa;
        color:#fff;
        font-weight: bold;
        padding: 10px;
        font-size: 1.5rem;
        border-radius: 10%;

    }

    .name-banner{
          position:absolute;
        bottom:25%;
        left:0px;
        display: block;
        width: 100%;
        background-color: #ccc8;
        color:#fff;
        font-weight: bold;
        padding: 10px;
        font-size: 2rem;
        text-align: center;
        white-space: normal;
    }
</style>
