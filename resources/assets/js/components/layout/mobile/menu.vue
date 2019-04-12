<template>
<div class="bg-fucsia p-4 row menu-container" v-click-outside="close" @click="close" >
                <div class="p-4">
                    <img style="width:100%" src="/storage/images/app/logo.png" alt="Mayorista del mate">
                </div>
                  <ul class="navbar-nav overflow-y-auto">
                        <li class="nav-item text-white">
                            <router-link class="nav-link text-white" to="/">
                                <fa-icon icon="home"></fa-icon> Home 
                            </router-link>
                        </li>
                        <li class="nav-item text-white">
                            <router-link class="nav-link text-white" to="/cotizador">
                                <fa-icon icon="shopping-cart"></fa-icon> Cotizador 
                            </router-link>
                        </li>
                        <li class="nav-item text-white">
                             <a class="nav-link text-white" target="_blank" href="/MAJU-lista-de-precios.pdf" >
                                <fa-icon icon="download"></fa-icon> Lista de precios
                            </a> 
                        </li>
                        <li class="nav-item text-white">
                            <a class="nav-link text-white" target="_blank" rel="noreferrer"
                                href="https://drive.google.com/file/d/1PRSqHX-70Eh7uAqOaF8xV-CAZ3BhqPL9/view">
                                 <fa-icon icon="download"></fa-icon> Catalogo digital
                            </a> 
                        </li>
                        
                        <!-- ADMIN -->
                        <li class="nav-item text-white" v-if="user && user.role_id < 3">
                            <router-link class="nav-link text-white" to="/admin">
                                <fa-icon icon="user-cog"></fa-icon> Administrar productos
                            </router-link>
                        </li>
                        <li class="nav-item text-white" v-if="user && user.role_id < 3">
                            <router-link class="nav-link text-white" to="/admin/pedidos">
                                <fa-icon icon="user-cog"></fa-icon> Pedidos
                            </router-link>
                        </li>
                        <li class="nav-item text-white" v-if="user && user.role_id < 3">
                            <router-link class="nav-link text-white" to="/admin/metadata">
                                <fa-icon icon="user-cog"></fa-icon> Metadata
                            </router-link>
                        </li>
                        <li class="nav-item text-white" v-if="user && user.role_id < 3">
                            <a class="nav-link text-white" href="/logout">
                                <fa-icon icon="sign-out-alt"></fa-icon> Salir
                            </a>
                        </li>
                        
                        
                    </ul>
</div>
</template>
<script>
import ClickOutside from 'vue-click-outside';
export default {
      directives: {
        ClickOutside
  },
  computed:{
      user(){
          return this.$store.getters.getUser;
      }
  },
  methods:{
      close(){
          this.$emit('close');
      }
  }
}
</script>

<style lang="scss">

    .overflow-y-auto{
        overflow-y: auto;
       
    }

    .text-white{
        color:#fff;
       
    }

    .menu-container{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items:center;
        height: 100vh;
    }

</style>