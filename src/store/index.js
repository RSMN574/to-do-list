import { createStore } from 'vuex'

export default createStore({
  state: {
    racc:"",
    rpas:"",
    acc:"",
    pas:""
  },
  mutations: {
    register(state,r){
     state.racc=r.racc
     state.rpas=r.rpas
      
    }
  },
  actions: {
  },
  modules: {
  }
})
