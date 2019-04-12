<template>
    <div class="row" v-if="categories">
        <div class="col-12 col-lg-8">
            <router-link to="/cotizador" >
                <div style="border:1px solid #000 ; display:flex;justify-content:center;align-items:center ;width:100%; height:449px"> <h1>TODOS LOS PRODUCTOS</h1></div>
            </router-link>
        </div>
        <div class="col-12 col-lg-4 d-flex flex-column">
            <div v-for="category in categories" :key="category.name" class="mb-1">
                <router-link :to="category.slug" v-if="category.slug">
                    <v-lazy-image v-if="category.image" :src="category.image"></v-lazy-image>
                    <div v-if="!category.image" style="border:1px solid #000 ; display:flex;justify-content:center;align-items:center ;width:100%; height:143px">
                        <h2>{{category.name}}</h2>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        categories(){
            return this.$store.getters.getCategories;
        }
    }
}
</script>
