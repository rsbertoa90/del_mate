<template>
    <div class="d-flex flex-column">
        <cotizer-form></cotizer-form>
        <list></list>
    </div> 
</template>

<script>
import cotizerForm from './form.vue';
import list from './list.vue';
export default {
    components:{
        cotizerForm,list
    },
    metaInfo(){
        return {
            title: this.meta ? this.meta.metatitle : 'Mayorista del Mate',
            meta:[
                {name:'description',content:this.meta ? this.meta.metadescription : ''}
            ]

        }
    },
    computed:{
        meta(){
            let metas = this.$store.getters.getMeta;
            return metas.find(m => {
                return m.page == 'carrito';
            })
        }
    }
}
</script>
