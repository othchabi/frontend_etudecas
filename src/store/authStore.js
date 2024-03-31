import { createStore } from "vuex";
import VuexPersist from "vuex-persist";

// Define a function to return the initial state
function initialState() {
  return {
    isAuthenticated: false,
    userRoles: [],
    userFirstName: "",
    userLastName: "",
  };
}

const vuexPersist = new VuexPersist({
  key: "my-app-store", // Key used to store data in the storage
  storage: window.localStorage, // Storage medium, can be sessionStorage or custom
  reducer: (state) => ({
    isAuthenticated: state.isAuthenticated,
    userRoles: state.userRoles,
    userFirstName: state.userFirstName,
    userLastName: state.userLastName,
    // Include other state properties you want to persist
  }),
});

const store = createStore({
  plugins: [vuexPersist.plugin], // Add VuexPersist as a plugin
  state: initialState,
  mutations: {
    setAuth(state, status) {
      state.isAuthenticated = status;
    },
    setUserRoles(state, roles) {
      state.userRoles = roles;
    },
    setUserFirstName(state, firstName) {
      state.userFirstName = firstName;
    },
    setUserLastName(state, lastName) {
      state.userLastName = lastName;
    },
    resetState(state) {
      // Clear the state
      Object.assign(state, initialState());
    },
  },
  actions: {
    login({ commit }, credentials) {
      commit("setAuth", true);
      // Perform login logic
    },
    logout({ commit }) {
      commit("resetState"); // Reset the state on logout
      // Perform additional logout logic if necessary
    },
    register({ commit }, userInfo) {
      commit("setAuth", true);
      // Perform registration logic
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    getUserRoles(state) {
      return state.userRoles;
    },
    getUserFirstName(state) {
      return state.userFirstName;
    },
    getUserLastName(state) {
      return state.userLastName;
    },
  },
});

export { store };
