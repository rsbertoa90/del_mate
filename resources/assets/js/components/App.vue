<template>
    <div>
        <appFrame></appFrame>
        <header>
            <app-nav></app-nav>
        </header>    
        <div class="row">
            <span class="back-arrow" @click="$router.go(-1)">
                <i class="fas fa-chevron-left"></i>
            </span>
        </div>
        <div class="py-4">
            <transition enter-active-class="animated fadeIn fast faster ">
                <router-view></router-view>
            </transition>
        </div>
         <whatsappBtn v-if="!user || user.role_id > 2 "></whatsappBtn>
         <total-bouncer :total="total" v-if="total"></total-bouncer>
    </div>
</template>

<script>

import totalBouncer from './app/total-bouncer.vue'
import whatsappBtn from './layout/whatsapp.vue';
import appFrame from './layout/frame.vue';
import appNav from './layout/navbar.vue';
export default {
    components:{appFrame,appNav,whatsappBtn,totalBouncer,},
    computed:{
        user(){
            return this.$store.getters.getUser;
        },
        total(){
            return this.$store.getters.getTotal;
        }
    }
}
</script>}

<style lang="scss" scoped>
    .back-arrow{
        color:blue;
        margin-left:10%;
        cursor: pointer;
        font-size: 2rem;

    }
</style>
