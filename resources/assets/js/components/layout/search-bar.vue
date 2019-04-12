<template>
    <div class="d-flex">
        <input v-model.lazy="searchTerm" ref="field" type="text" class="form-control border-fucsia" placeholder="BUSCAR" >
        <button class="btn bg-white fucsia border-fucsia">
            <fa-icon icon="search" class="mb-1"></fa-icon>
        </button>
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
