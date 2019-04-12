<template>
    <div class="d-flex">
        <input v-model.lazy="searchTerm" ref="field" type="text" class="form-control border-fucsia" placeholder="BUSCAR" >
        <router-link class="btn bg-white fucsia border-fucsia" to="/busqueda">
            <fa-icon icon="search" class="mb-1"></fa-icon>
        </router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            searchTerm:'',
        }
    },
    computed:{
        storeSearchTerm(){
                return this.$store.getters.getSearchTerm;
        }
    },
    watch:{
        searchTerm(){
            this.$store.dispatch('changeSearchTerm',this.searchTerm);
        }
    },
    mounted(){
        this.$refs.field.focus();

    },
    
}
</script>
