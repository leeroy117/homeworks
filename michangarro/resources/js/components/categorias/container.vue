<template>
   <div>
      
      <div>
       <h5>Categorias</h5>
       <v-card
            class="d-flex pa-2"
            outlined
            tile
            width="100%"
       >
           <v-container fluid>
               <v-data-table
                    expand-icon
                    :headers="headers"
                    :items="categorias"
                    hide-default-footer
                    class="elevation-0"
               >
                   <template slot="no-data">
                       No hay Categorias encontradas.
                   </template>
               </v-data-table>
           </v-container>
       </v-card>
   </div>
   </div>
</template>

<script>
export default {
    data: ()=>({
        headers:[
            {text: 'ID',align:'left', value: 'id_categoria'},
            {text: 'Nombre', value: 'nombre'}
        ],
    }),
    computed:{
        categorias:{
            get(){
                return this.$store.state.categoria.categorias.data;
            }
        }
    },
    created(){
        this.$store.dispatch('categoria/getCategorias')
    }
}
</script>