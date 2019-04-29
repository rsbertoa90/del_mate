<template>
    <div v-if="product" class="d-flex flex-column justify-content-center text-center w-100">
        <h1 class="mb-4">{{product.name | ucFirst}}</h1>
        <div class="row">
            <div class="col-12 offset-lg-2 col-lg-4">

                <v-lazy-image v-if="product.images[0]" :src="product.images[0].url" :alt="product.name">
                </v-lazy-image>
                
                <v-lazy-image v-else src="/storage/images/app/no-image.png" :alt="product.name">
                </v-lazy-image>
            
            </div>
            <div class="col-12  col-lg-4 mt-4 mt-lg-0">
                <info></info>
            </div>
        </div>
    </div>
</template>

<script>
import info from './info.vue';
export default {
    components:{info},
    metaInfo(){
        return{
            title:this.metatitle,
            meta: [
                { charset: 'utf-8' },
                { vmid: 'description', name: 'description', content: this.metadescription }
            ]
        }
    },
    computed:{

        metatitle(){
            if (this.product )
            {
                return this.product.metatitle ? this.product.metatitle : this.product.name+' por mayor'
            }
            
        },
        metadescription(){
            if (this.product){
                if (this.product.metadescription)
                {
                    return this.product.metadescription;
                }
                else if (this.product.description)
                {
                    return this.product.description;
                }
                else return this.product.name+" "+'por mayor';
                    
            }  
            
        },
        categories(){
            return this.$store.getters.getNotPaused;
        },
        product(){
            let vm =this;
            let res = null;
             this.categories.forEach(c => {
                 let p = c.products.find(pr => {
                     if(pr.slug){
                         pr.slug = '/'+pr.slug;
                         pr.slug = pr.slug.replace('//','/');
                         return pr.slug.trim().toLowerCase() == '/'+vm.$route.params.product_slug.trim().toLowerCase(); 
                     }
                   
                 });
                 if (p){
                     res = p;
                     return;
                 }
            });
            return res;
        }

    }

}
</script>

<style scoped>
    img{
        width:100%;
        border:1px solid #868686;
    }
</style>