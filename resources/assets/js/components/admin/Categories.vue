<template>
    <div class="row">
        <div v-if="categories" class="col-12 col-lg-6 d-flex flex-column justify-content-start align-items-center">
            <h4>Categorias</h4> 
            <hr>

            <div class="border border-success p-2 m-3 d-flex flex-column">
                <h4 class="text-success">Nueva categoria</h4>
                <textarea v-model="newcat"></textarea>
                <button class="btn btn-lg btn-outline-info"
                    @click="newCategory()">Guardar</button>
            </div>
            <hr>
            <div v-for="category in categories" :key="category.id" class="d-flex flex-column m-2">
                <textarea v-model.lazy="category.name" @change="update('category',category)"> </textarea>
                <textarea v-model.lazy="category.description" placeholder="descripcion" @change="updateCategoryDescription(category)"> </textarea>
                <div>
                    <div v-if="category.image">
                        <v-lazy-image width="150px" :src="category.image" :alt="category.name"></v-lazy-image>
                    </div>
                    <form action="/admin/categories/image" method="post" enctype="multipart/form-data">
                        <input type="hidden" name="_token" :value="csrf">
                        <input type="hidden" name="id" :value="category.id">
                        <label class="btn "
                                :class="{'btn-primary':category.uploaded,
                                         'btn-outline-primary':!category.uploaded}">
                            Subir imagen
                            <input name="image" style="display:none" type="file" 
                                    @change="setUploaded(category)">
                        </label>
                        <button v-if="category.uploaded" type="submit" class="btn btn-outline-success">GUARDAR</button>
                    </form>
                </div>
                <button @click="destroyCat(category)" v-if="!category.products || !category.products.length" class="btn btn-danger">BORRAR</button>
            </div>
        </div>
      
       
    </div>
</template>

<script>
export default {
    data(){
        return{
            csrf:window.csrf,
            newcat:null,
            newsup:null,
            categories:[],
           
        }
    },
    methods:{
        setUploaded(cat){
            Vue.set(cat,'uploaded',true);
        },
        destroyCat(cat){
             this.$http.delete('/admin/category/'+cat.id)
                .then(res => {
                    this.refresh();
                });   
        },
     
        newCategory(){
            var vm=this;
            if (this.newcat){
                let data = {
                    name : this.newcat
                }
                 this.$http.post('/admin/category',data)
                    .then(res => {
                          vm.refresh();
                        vm.newcat = null;
                    });
            }
        },
       
        updateCategoryDescription(category){
            let data = {
                id : category.id,
                field: 'description',
                value : category.description
            }
            this.$http.put('/admin/category',data);
        },
        update(type,obj)
        {
            let data = {
                id : obj.id,
                field: 'name',
                value : obj.name
            }
            this.$http.put('/admin/'+type,data);
        },
        refresh(){
            this.$http.get('/api/categories')
            .then(response => {
                this.categories = response.data;
            });
       
        }
    },
    created(){
        this.refresh();
    }
}
</script>
