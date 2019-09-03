import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [
      {
        id: 0,
        name: 'A'
      },
      {
        id: 1,
        name: 'B'
      },
      {
        id: 2,
        name: 'C'
      },
      {
        id: 3,
        name: 'D'
      },
      {
        id: 4,
        name: 'E'
      },
      {
        id: 5,
        name: 'F'
      },
      {
        id: 6,
        name: 'G'
      },
      {
        id: 7,
        name: 'H'
      },
      {
        id: 8,
        name: 'I'
      },
      {
        id: 9,
        name: 'J'
      },
      {
        id: 10,
        name: 'K'
      },
      {
        id: 11,
        name: 'L'
      },
    ],
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },

  getters: {

  },

  actions: {

  },
});
