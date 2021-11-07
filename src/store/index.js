import { createStore } from "vuex";
import axios from "axios";

// We commit Mutations and dispatch actions.
// Mutations can't hold async code but actions can.
// getters are more like compued properties

export default createStore({
  state: {
    counter: 0,
    colorCode: "#35495e",
  },
  mutations: {
    increaseCounter(state, randomNumber) {
      state.counter += randomNumber;
    },
    decreaseCounter(state, randomNumber) {
      state.counter -= randomNumber;
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue;
    },
  },
  actions: {
    async increaseCounter({ commit }) {
      const { data } = await axios.get(
        "https://www.random.org/integers/?num=1&min=1&max=9&col=1&base=10&format=plain&rnd=new"
      );
      commit("increaseCounter", data);
    },
    async decreaseCounter({ commit }) {
      const { data } = await axios.get(
        "https://www.random.org/integers/?num=1&min=1&max=9&col=1&base=10&format=plain&rnd=new"
      );
      commit("decreaseCounter", data);
    },
    setColorCode({ commit }, newValue) {
      commit("setColorCode", newValue);
    },
  },
  modules: {},
  getters: {
    counterSquare(state) {
      return state.counter * state.counter;
    },
  },
});
