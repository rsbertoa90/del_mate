<template>
    <div>
        <h1>HOME</h1>
        <div class="row">
            <offers></offers>
        </div>
        <div class="d-flex flex-column">
           <router-link v-for="category in categories" :key="category.id"
                        :to="category.slug">
               {{category.name}}
           </router-link> 
        </div>
    </div>
</template>

<script>
import  offers from './offers.vue';
export default {
    components:{offers,},
    metaInfo(){return{
        title: this.metadata ? this.metadata.metatitle : 'Mayorista  del Mate',
        meta:[
            {name:'description', content: this.metadata ? this.metadata.metadescription : ''}
 
 ]
    }},
    computed:{
        metadatas(){
            return this.$store.getters.getMeta;
        },
        metadata(){
            if (this.metadatas){
                return this.metadatas.find(m => {
                    return m.page == 'home'
                });
            }
        },
        categories(){
            return this.$store.getters.getNotPaused;
        }
}
    }
</script>
