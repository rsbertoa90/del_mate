<template>
    <div class="container">   
        <div class="row d-flex justify-content-center text-center">
          <h1>MAYORISTA DEL MATE</h1>
        </div>
        
             
         
             <hr>
             
        <div class="row" v-for="category in categories" :key="category.id">
            <div v-for="(product,i) in category.products" 
                  :key="'product-'+product.id" 
                  class=" flex-wrap col-12 col-lg-4 p-lg-4" >
               <cotizer-productcard :product="product" :first="i == 0"></cotizer-productcard>
            </div>
        </div>
        
        <transition enter-active-class="animated bounceIn" leave-active-class="animated fadeOutDown">
            <div v-if="total > 0" id="total"  class="col-12 row d-flex flex-column justify-content-center align-items-center w-100">
                <div  class="total-bg p-1 col-6 col-lg-2">
                    <div class="col-12 bg-white d-flex justify-content-center">
                    TOTAL : ${{total | price}}
                    </div>
                </div>
                <div  class="total-bg p-1 col-6 col-lg-2">
                    <div class="col-12 bg-white d-flex justify-content-center">
                        <a href="#form">Terminar pedido</a>
                    </div>
                </div>    
            </div>    
        </transition>
        <hr>
        <div>
            <cotizer-form :list="list" :total="total"></cotizer-form>
        </div>
        <div v-if="list.length > 0">
            <pedido :list="list"></pedido>
        </div>
       
      <!--   <tutorial></tutorial> -->
    </div>
</template>

<script>
 import { mapActions } from 'vuex';
 import { mapGetters } from 'vuex';
    import cotizerProductcard from './CotizerProductCard.vue';
    import codeSelector from './code-selector.vue';
   
    import cotizerForm from './Cotizer-form.vue';
    import pedido from './pedido.vue';
    import tutorial from './tutorial.vue'
    export default {
        components : {cotizerForm,pedido,tutorial,cotizerProductcard,codeSelector},
        metaInfo(){
            return {
                title: this.metainfo

            }
        },
        data(){
            return {
                selector:{
                    code:'',
                    name:'',
                    variant:null,
                    units:0
                },

                list : [],
                
            }
        },

        watch : {
            'selector.code'(){
                var  vm = this;
                var res =false;
                this.categories.forEach(cat => {
                    cat.products.forEach(product => {
                        if (vm.selector.code == product.code){
                            vm.selector.product = product;
                            vm.selector.name = product.name;
                            res = true;
                        }
                    });
                });
                if (!res){
                    vm.selector.product = null;
                    vm.selector.name='';
                }
            },
            total() {
                   var result = [];
                   var vm = this;

                    vm.categories.forEach(cat => {
                    var prods = cat.products.filter(function(p){     
                        return ( p.units != null & p.units > 0 );
                    });
                    if (prods.length > 0){
                        result.push(prods);
                    }
                    
                });
                   
                vm.list = [].concat.apply([], result);
               
            }
        },
        computed: {
            ...mapGetters({
               categories : 'getCategories',
               user : 'getUser',
               configs:'getConfig',
               allmeta: 'getMeta'
            }),
            meta(){
                if (this.allmeta) return this.allmeta.find(m => {
                    return m.page == 'cotizer';
                });
            },

            
            total() {
                if(this.categories){

                    var vm = this;
                    var tot = 0;
                    vm.categories.forEach(cat => {
    
                        cat.products.forEach(function(product){
                            
                                if (product.units > 0)
                                {
                                    
                                   tot+= product.price * product.units
                                    
                                }
                            
                        });
                    })
                    return tot;
                }
            }
        },

        methods:
        {
            
             listChange(event){
                 
                let variant = this.list.find(vari => {
                    return vari.id == event.id;
                });
                if(variant){
                    variant.units = event.units;
                }

            },
             addSelectorvariant(){
                var vm = this;
                if (vm.selector.units > 0 && vm.selector.variant != null ){
                    let prod = this.selector.variant;
                    if (prod.units == undefined)
                    {
                        Vue.set(prod,'units',0);
                    }
                   prod.units = this.selector.units;
                   vm.selector.variant = null;
                   vm.selector.code = '';
                   vm.selector.units = 0;
                   vm.selector.name ='';
                   
                }
            },
        
        },     
    }
</script>

<style scoped lang="scss">

  
 .table,.accordion,.tr,.td,.kalam,.card{
    font-family:  'Kalam', cursive;
}


.white-space-normal{
    white-space: normal;
}
.text-big{
    font-size: 1.5rem;
}
.product-miniature{
    min-width: 200px;
    width: 200px;
    margin-right: 15px;
}
.container{
    
    margin-bottom: 100px;
  
    }

    td{
        white-space:normal;
    }
    input[type="number"]{
        width: 70px;
    }

    


   .btn-link {color : black;}
    #total {
        position: fixed;
        /* margin-left:50vw; */
        bottom: 20px;
        z-index: 200;
    }
    img{width:100%}

    .total-bg{
        background-color: #0FE0E8;
    }


    @media(max-width: 600px){

    
        .product-miniature{
    min-width: 100px;
}
        .card-header{
            padding:0;
        }
        .container{
    
            margin-left: -7%;
            width: 100vw;
            padding: 15px;
            }
        .sampleImage{width: 80px;}
        td { white-space :normal;}
        table {
            font-size: 0.66rem;
            font-weight: bold;
        }
       
        .card-body,table th, table td{padding:5px;}
    }
    
    @media(min-width: 600px){
        .sampleImage{width: 150px;}
        table{ font-size: 1rem; font-weight: normal}
        td {white-space: normal;}
        .card-body,.container{padding:1.25rem}
        .total-bg{
            font-size: 1.3rem;
        }
    }
   
</style>
