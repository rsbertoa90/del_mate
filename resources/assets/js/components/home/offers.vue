<template>
    <div class="col-12">
        <div v-for="product in offers" :key="product.id">
            <router-link :to="getUrl(product)">
                {{product.name}}
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        offers(){
            return this.$store.getters.getOffers;
        },
        categories(){
            return this.$store.getters.getCategories;
        }
    },
    methods:{
        getUrl(product){
            let category = this.categories.find(c => {
                return c.id === product.category_id;
            });

            let res = category.slug + '/' + product.slug;
            res = res.replace('//','/');

            return res;
            
        }
    }
}
</script>
