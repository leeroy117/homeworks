const state = {
    categorias:[]
};

const getters = {};

const actions = {
    getCategorias( {commit} ){
        axios.get("/api/v1/categorias/all")
        .then( response =>{
            console.log(response.data.data  );
            commit('setCategorias', response.data);
        })
    }
};

const mutations = {
    setCategorias(state, data){
        state.categorias = data;
    }
};

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}