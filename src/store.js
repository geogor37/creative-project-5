import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    lists: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setLists(state, lists) {
      state.lists = lists;
    },
    addList(state, list) {
      state.lists.push(list);
    }
  },
  actions: {
    async register(context, data) {
      try {
        let response = await axios.post("/api/users", data);
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async login(context, data) {
      try {
        let response = await axios.post("/api/users/login", data);
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async logout(context) {
      try {
        await axios.delete("/api/users");
        context.commit('setUser', null);
        context.commit('setLists', []);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async getUser(context) {
      try {
        let response = await axios.get("/api/users");
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async getLists(context) {
      console.log("Getting lists");
      try {
        let response = await axios.get("/api/wishlists");
        console.log(response.data);
        context.commit('setLists', response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async createList(context, name) {
      try {
        if (name.trim().length > 0) {
          let listResponse = axios.post("/api/wishlists", {
            title: name
          });
          context.commit('addList', (await listResponse).data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
})
