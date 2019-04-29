
import Vue from 'vue';

import VueRouter from 'vue-router';
import Meta from 'vue-meta';

import {store} from './store/store.js';

Vue.use(VueRouter);
Vue.use(Meta);





function guardAdmin(to, from, next)
{  
    setTimeout(() => {
        
        let user = store.getters.getUser;
        if (user && user.role_id < 3)
        {
            next();
        }else{
            next('/login');
        }
        
    }, 100);
}

function guardLogin(to, from, next)
{  
    setTimeout(() => {
        
        let user = store.getters.getUser;
        if (user && user.role_id < 3)
        {
            next('/admin');
        }else{
           next();
        }
        
    }, 100);
}

/* 
import "core-js/modules/es6.promise";
import "core-js/modules/es6.array.iterator";
 */



import Login from './components/login/Login.vue';

import Home  from'./components/home/Home.vue' ; 
import Cotizer from'./components/cotizer/Cotizer.vue';
import ShoppingCart  from'./components/shoppingCart/ShoppingCart.vue';
import SearchResults  from './components/search-results/SearchResults.vue'

import Admin  from'./components/admin/Admin.vue';
import Orders  from'./components/admin/Orders.vue'; 
import Metadata  from'./components/admin/metadata/Super.vue';
import Category  from './components/category/Category.vue';
import CategoryIndex  from './components/category/categoryIndex.vue';
import Product  from './components/category/product/Product.vue';


const router = new VueRouter({
    scrollBehavior(to, from, savedPosition) {
        // page scroll to top for all route navigations
        return { x: 0, y: 0 }
    },
    mode:'history',
    routes:[
        {
            path:'/login',
            name:'login',
            component:Login,
            beforeEnter:guardLogin
        },
        {
            path:'/admin',
            name:'admin',
            component:Admin,
            beforeEnter:guardAdmin
        },
        {
            path:'/admin/pedidos',
            /* alias:'/admin/pedidos', */
            name:'orders',
            component:Orders,
            beforeEnter:guardAdmin
        },
        {
            path:'/admin/metadata',
            /* alias: '/admin/metadata', */
            name:'meta',
            component:Metadata,
            beforeEnter:guardAdmin
        },

        {
            path:'/',
            name:'home',
            component:Home
        },
        
        {
            path:'/cotizador',
            name:'cotizador',
            component: Cotizer
        },
        {
            path:'/carrito',
            name:'carrito',
            component: ShoppingCart
        },
        
        {
            path:'/busqueda',
            name:'busqueda',
            component: SearchResults
        },
        {
            path:'/:category_slug',
            component: Category,
            children:[
                {
                    path: '',
                    component: CategoryIndex,
                    name:'category'
                },
                {
                    path:':product_slug',
                    component:Product,
                    name:'product'
                }
            ]
            
        }
    ]
    
});

export default router;