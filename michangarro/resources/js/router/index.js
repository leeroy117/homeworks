import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Clientes from '../components/clientes/container'
import Categorias from '../components/categorias/container'
import Productos from '../components/productos/container'

const routes = [
    {
        component: Clientes,
        name: "clientes",
        path: "/clientes"
    },
    {
        component: Categorias,
        name: "categorias",
        path: "/categorias"
    },
    {
        component: Productos,
        name: "productos",
        path: "/productos"
    }
];

export default new VueRouter({
    routes
});

