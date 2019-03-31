<template>
    <div>
        <app-frame></app-frame>
        <header>
            <app-nav></app-nav>
        </header>    
        <div class="py-4">
            <transition enter-active-class="animate fadeIn "
                        leave-active-class="annimate fadeOut  position-absolute">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
import appFrame from './layout/frame.vue';
import appNav from './layout/navbar.vue';
export default {
    components:{appFrame,appNav},
    computed:{
        user(){
            return this.$store.getters.getUser;
        }
    }
}
</script>