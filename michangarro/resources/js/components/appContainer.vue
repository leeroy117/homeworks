<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link @click="logout">
          <v-list-item-action>
            <v-icon>mdi-power</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Cerrar sesion {{ currentUser.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/clientes" link>
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Clientes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/categorias" link>
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Categorias</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/productos" link>
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Productos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    computed:{
       loggedIn:{
         get(){
           return this.$store.state.currentUser.loggedIn;
         }
       },
       currentUser:{
         get(){
            return this.$store.state.currentUser.user;
         }
       } 
    },
    methods:{
        logout(){
            this.$store.dispatch('currentUser/logoutUser')
        }
    },
    created(){
      if(localStorage.hasOwnProperty("blog_token") ){
      axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("blog_token");
      this.$store.dispatch('currentUser/getUser');
      }else {
         window.location.replace("/login");
      }
    }
  }
</script>