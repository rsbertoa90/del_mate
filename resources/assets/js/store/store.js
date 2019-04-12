import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        user: null,
        config: null,
        states: [],
        categories:[],
        meta:[],
        searchTerm:''
    },
    getters: {
        getSearchTerm(store){
            return store.searchTerm;
        },
        getMeta(store){
            return store.meta;
        },
        getUser(store) {
            return store.user;
        },
        getCategories(store) {
            return store.categories;
        },
        getConfig(store) {
            return store.config;
        },
        getStates(store) {
            return store.states;
        },
        getNotPaused(store) {
            let res = [];
            store.categories.forEach(cat => {
                cat.products = cat.products.filter(prod => {
                    return !prod.paused;
                });
                if (cat.products.length > 0) {
                    res.push(cat);
                }
            });
            return res;
        },
        getOffers(store)
        {
            let res = [];
            store.categories.forEach(cat => {
                let add = cat.products.filter(p => {
                    return p.offer && !p.paused;
                });
                res = res.concat(add);
            });
            return res;
        },
        getTotal(store) {
            var tot = 0;
            store.categories.forEach(function (category) {
                category.products.forEach(function (product) {
                    if (product.units > 0) {
                            tot += product.price * product.units;
                        
                    }
                });
            });
            return tot;
        },
        getList(store) {
            var result = [];

            store.categories.forEach(function (category) {
                var prods = category.products.filter(function (el) {
                    return (el.units != null & el.units > 0);
                });
                if (prods.length > 0) {
                    result.push(prods);

                }

            });


            return [].concat.apply([], result);
        }

        
    },
    mutations: {
        
        setMeta(state, payload) {
            state.meta = payload;

        },
        setUser(state, payload) {
            state.user = payload;

        },
        setConfig(state, payload) {
            state.config = payload;
        },
        setStates(state, payload) {
            state.states = payload
        },
        setCategories(state, payload) {
            state.categories = payload
        },
        setSearchTerm(state, payload) {
            state.searchTerm = payload
        },

    },
    actions: {
        changeSearchTerm : ({commit},payload) => {
            commit('setSearchTerm',payload);
        },
        fetchUser: ({
            commit
        }, payload) => {

            Vue.http.get('/getuser')
                .then(response => {
                    commit('setUser', response.data);

                });
        },
        fetchMeta: ({
            commit
        }, payload) => {

            Vue.http.get('/api/meta')
                .then(response => {
                    commit('setMeta', response.data);
                });
        },
        fetchConfig: ({
            commit
        }, payload) => {

            Vue.http.get('/config')
                .then(response => {
                    commit('setConfig', response.data);
                });
        },
        fetchStates: ({
            commit
        }, payload) => {
            Vue.http.get('/api/states')
                .then(response => {
                    commit('setStates', response.data);
                });
        },
        fetchCategories: ({
            commit
        }, payload) => {
            Vue.http.get('/api/categories')
                .then(response => {
                    commit('setCategories', response.data);
                });
        },
    },
   

});
