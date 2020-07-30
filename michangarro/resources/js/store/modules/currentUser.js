import Axios from "axios";

const state ={
    user:{},
    
};
const getters = {};
const actions = {
    getUser( {commit} ){
       axios.get("/api/v1/user/current")
       .then(response => {
            commit('setUser', response.data);
       });
    },
    loginUser({}, user){
        axios.post("/api/v1/user/login",{
        email: user.email,
        password: user.password
       })
       .then(response => {
           console.log(response.data)
           if(response.data.accessToken){
               //save token
               localStorage.setItem(
                   "blog_token",
                   response.data.accessToken
               )

               window.location.replace("/app")
           }
       })
    },
    logoutUser(){
        //remove token
        localStorage.removeItem('blog_token');
        window.location.replace("/login");
    }
};
const mutations = {
    setUser( state, data){
        state.user = data;
    }
};

export default {
    namespaced: true,
    state, 
    getters,
    actions,
    mutations
}