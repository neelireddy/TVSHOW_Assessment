import Vue from "vue";
import Vuex from "vuex";
import {
  getSearchResult,
  getAllShows,
  getShowDetailsById,
  showDetailsByName
} from "../services/tv-maze-api";
Vue.use(Vuex);
export const state = {
  allShows: [],
  currentShow: [],
  searchList: [],
  error: []
};
export const mutations = {
  SET_ALL_SHOWS(state, allShows) {
    state.allShows = allShows;
  },
  SET_SINGLE_SHOW(state, show) {
    state.currentShow = show;
  },
  SET_SEARCH_LIST(state, searchList) {
    state.searchList = searchList;
  },
  SET_ERROR(state, error) {
    state.error = error;
  }
};
export const actions = {
  async getAllShowsAction({ commit }) {
    return getAllShows()
      .then(result => commit("SET_ALL_SHOWS", result.data))
      .catch(error => commit("SET_ERROR", error));
  },
  async getShowDetailsByIdAction({ commit }, data) {
    return getShowDetailsById(data)
      .then(result => commit("SET_SINGLE_SHOW", result.data))
      .catch(error => commit("SET_ERROR", error));
  },
  async getSearchResultAction({ commit }, data) {
    return getSearchResult(data)
      .then(result => commit("SET_SEARCH_LIST", result.data))
      .catch(error => commit("SET_ERROR", error));
  },
  async getShowByNameAction({ commit, dispatch }, data) {
    return showDetailsByName(data)
      .then(result => {
        dispatch("getShowDetailsByIdAction", result.data.id);
      })
      .catch(error => commit("SET_ERROR", error));
  }
};
export const store = new Vuex.Store({
  state,
  mutations,
  actions
});
