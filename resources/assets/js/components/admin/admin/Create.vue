<template>
  <div>
         <button class="btn btn-lg btn-info" @click="showForm=!showForm">Nuevo Producto</button>
         <form v-if="showForm" ref="form" @submit.prevent="save" class="form  row ml-1 d-flex flex-column">
            <!-- codigo -->
            <div class="col-12 col-lg-6 row">
                 <label for="" class="col-6">Codigo</label>
                 <input required v-model.trim="formData.code" type="text" class="col-6">
             </div>
              
           
             <!-- categoria -->
             <div class="col-12 col-lg-6 row">
                 <label for="" class="col-6">Categoria</label>
                 <select required  id="" v-model.trim="formData.category_id" class="col-6 form-control">
                     <option  v-for="category in categories" 
                             :key="category.id"
                             :value="category.id" >
                        {{category.name}}
                     </option>
                     <option value="new" class="text-success">Nueva</option>
                 </select>
                 <input class="offset-6" v-model.trim="newCategory"
                        v-if="formData.category_id=='new'" 
                        placeholder="Nueva Categoria" 
                        type="text">
             </div>
         
             <!-- producto -->
             <div class="col-12 col-lg-6 row">
                 <label for="" class="col-6">Producto</label>
                 <textarea rows="2"  required  v-model.trim="formData.name" 
                        type="text" class="col-6"></textarea>
             </div>
            <!-- precio -->
             <div  class="col-12 col-lg-6 row">
                 <label for="" class="col-6">Precio</label>
                 <input min='0' step=".01" required v-model.trim="formData.price"  
                 type="number" class="col-6">
             </div>
            
             <div class="offset-1 mt-2">
                <button type="submit" class="btn btn-outline-success align-self-end justify-self-end"> GUARDAR </button>
             </div>
         </form>
    </div>
</template>

<script>
    export default {
        props : ['categories'],
        data(){
            return {
                showForm:false,
                editProvider:false,
                editCategory:false,
                newCategory :null,
              
                formData: {

                    price :null,
                   
                    category_id : null,
                  
                    name : null,
                    code :null
                }
            }
        },
        methods : {
            valid(){
                var vm = this;
                if (vm.formData.category_id == 'new'){
                    
                    if (!vm.newCategory){
                        swal('error','No ingreso un nombre para la nueva categoria','error');
                        return false;
                    }
                }
               
                var duplicated = null;
                vm.categories.forEach(el => {
                    let e = el.products.find(p => {
                        return p.code == vm.formData.code;
                    });
                    if (e != null){
                        duplicated = e;
                    }
                });

                if (duplicated!=null){
                    swal('error','ya existe un producto con el codigo'+vm.formData.code,'error');
                    return false;
                } 
                else {return true;}
            },
            resetForm(){
                this.formData =  {

                    price :null,
                  
                    category_id : null,
                    name : null,
                    code :null
                }
            },
            saveProduct()
                {
                    
                    var vm=this;
                    vm.$http.post('/admin/product/',vm.formData)
                                        .then(response => {
                                        vm.$emit('productSaved',response.data);
                                    
                                         swal('Producto guardado','','success');
                                          vm.resetForm();
                                          vm.$emit('productSaved');
                                          vm.showForm=false;
                                    });
                },
            saveCategory(callback)
                {
                  
                   var vm=this;
                        
                         var duplicated = vm.categories.find(function(el){
                             return el.name.toLowerCase() == vm.newCategory.toLowerCase();
                         });
                         
                         if (duplicated != null){
                             swal ('Error', `Ya existe la categoria ${vm.newCategory}`,'error');
                         }else {
                             vm.$http.post('/admin/category/',{name : this.newCategory, _token : csrf})
                                .then(response => {
                                    var category = response.data;
                                    vm.formData.category_id = category.id;
                                    callback();
                                });
                         }
                },
         
            save()
            {
                var vm = this;
            
                if (this.valid()){
                    if (this.formData.category_id == 'new')
                    {
                   
                     
                            vm.saveCategory(vm.saveProduct);
                        
                    }
                 
                    else {
                        vm.saveProduct();
                    }
                }
                
            }
        },
       
    }
</script>