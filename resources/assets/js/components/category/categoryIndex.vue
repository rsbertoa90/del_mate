<template>
<div v-if="category && category.products" class="d-flex flex-column">

         
   

    
      
        
          <div>
              <mobile-head v-if="$mq!='lg'" :category="category"></mobile-head>
              <wide-head v-else :category="category"></wide-head>
          </div>
          <div v-if="category.description" class="text-center mt-4">
              <p> {{category.description}} </p>
          </div>
          <br>
          <div class="row">
                    <div v-for="product in category.products" :key="product.id" class="mt-4 col-12 col-lg-3 border-grey">
                     
                            <productCard :product="product" class=" "></productCard>
                
                    </div>
          </div>
           
         
        
</div>
</template>


<script>
import mobileHead from './mobile-header.vue';
import wideHead from './wide-header.vue';
import productCard from './product/card.vue';
export default {
    components:{productCard,mobileHead,wideHead},
    metaInfo(){
        return{
            title: this.metatitle,
            meta:[
                {name:'description',vmid:'description',content:this.metadescription}
            ]
        }
    },
   
    computed:{
        metatitle(){
            if (this.category)
            {
               return this.category.metatitle ? this.category.metatitle : this.category.name+' '+"por mayor";
            }
        },
        metadescription(){
            if (this.category){
                if (this.category.metadescription){ return this.category.metadescription}
                else if (this.category.description){ return this.category.description}
                else {return this.metatitle}
            }

        },
        categories(){
            return this.$store.getters.getNotPaused;
        },
        category(){
            if (this.categories)
            {
                return this.categories.find (cat => {
                    return cat.slug === '/'+this.$route.params.category_slug;
                });
            }
        }
    }
}
</script>
