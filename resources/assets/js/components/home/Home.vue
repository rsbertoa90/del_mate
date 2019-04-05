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
    computed:{
        categories(){
            return this.$store.getters.getNotPaused;
        }
    }
}
</script>
