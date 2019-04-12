<template>
<div v-if="category && category.products" class="d-flex flex-column">

         
   

    
      
         
          <div style="text-align: center">
              <h1> {{category.name}} </h1>
          </div>
          <div v-if="category.description" class="text-center mt-4">
              <p> {{category.description}} </p>
          </div>
          <br>
          <div class="container">
                    <div v-for="product in category.products" :key="product.id" class="col-lg-3 col-12">
                        <router-link class="row" :to="category.slug+product.slug">
                            <productCard :product="product" class="mt-4"></productCard>
                        </router-link>
                    </div>
          </div>
           
         
        
</div>
</template>


<script>
import productCard from './product/card.vue';
export default {
    components:{productCard},
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
