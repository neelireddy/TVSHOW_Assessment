import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import {
  getSearchResult,
  getAllShows,
  getShowDetailsById,
  showDetailsByName
} from "../../../src/services/tv-maze-api";
import { store, actions, mutations } from "../../../src/store/index";
jest.mock("../../../src/services/tv-maze-api");
// create local vue instance
const localVue = createLocalVue();
localVue.use(Vuex);
describe("In Store", () => {
  it("it should have all state objects ", () => {
    expect(store.state.allShows).toBeTruthy();
    expect(store.state.currentShow).toBeTruthy();
    expect(store.state.searchList).toBeTruthy();
    expect(store.state.error).toBeTruthy();
  });
  describe("In mutations", () => {
    it("SET_ALL_SHOWS sets state.allShows to shows", () => {
      const shows = [{ name: "testShow1" }, { name: "testShow2" }];
      const state = {
        allShows: {}
      };
      mutations.SET_ALL_SHOWS(state, shows);
      expect(state.allShows).toBe(shows);
    });

    it("SET_SINGLE_SHOW sets state.currenShow to show", () => {
      const show = { name: "testShow", id: 1 };
      const state = {
        currentShow: []
      };
      mutations.SET_SINGLE_SHOW(state, show);
      expect(state.currentShow).toBe(show);
    });

    it("SET_SEARCH_LIST sets state.searchList to searchList", () => {
      const searchList = [{ name: "testShow1" }, { name: "testShow2" }];
      const state = {
        searchList: {}
      };
      mutations.SET_SEARCH_LIST(state, searchList);
      expect(state.searchList).toBe(searchList);
    });

    it("SET_ERROR sets state.error to error", () => {
      const error = { name: "testError" };
      const state = {
        error: []
      };
      mutations.SET_ERROR(state, error);
      expect(state.error).toBe(error);
    });
  });
  describe("In Actions", () => {
    let commit;
    let dispatch;
    let error;

    beforeEach(() => {
      commit = jest.fn();
      dispatch = jest.fn();
      error = new Error({ message: "Async error" });
    });

    it("getAllShowsAction should commits all shows data returned by getAllShows Api method", async () => {
      const result = { data: [0, 1, 2] };
      // Control mock to resolve with an array
      getAllShows.mockResolvedValue(result);
      await actions.getAllShowsAction({ commit, dispatch });
      expect(commit).toHaveBeenCalledWith("SET_ALL_SHOWS", result.data);
    });

    it("getAllShowsAction should cacth en error when getAllShows Api throws error", async () => {
      getAllShows.mockRejectedValue(error);
      await actions.getAllShowsAction({ commit });
      expect(commit).toHaveBeenCalledWith("SET_ERROR", error);
    });

    it("getShowDetailsByIdAction should commits currentShow data returned by getShowDetailsById Api method", async () => {
      const result = { data: [{ show: ["testShow"] }] };
      const showId = 1;
      // Control mock to resolve with an array
      getShowDetailsById.mockResolvedValue(result);
      await actions.getShowDetailsByIdAction({ commit }, showId);
      expect(commit).toHaveBeenCalledWith("SET_SINGLE_SHOW", result.data);
    });

    it("getShowDetailsByIdAction should cacth en error when getShowDetailsById Api throws error", async () => {
      const showId = 1;
      getShowDetailsById.mockRejectedValue(error);
      await actions.getShowDetailsByIdAction({ commit }, showId);
      expect(commit).toHaveBeenCalledWith("SET_ERROR", error);
    });

    it("getSearchResultAction should commits searchList data returned by getSearchResult Api method", async () => {
      const result = { data: { shows: [0, 1, 2] } };
      const data = "testData";
      // Control mock to resolve with an array
      getSearchResult.mockResolvedValue(result);
      await actions.getSearchResultAction({ commit, dispatch }, data);
      expect(commit).toHaveBeenCalledWith("SET_SEARCH_LIST", result.data);
    });

    it("getSearchResultAction should cacth en error when getSearchResult Api throws error", async () => {
      const data = "testData";
      getSearchResult.mockRejectedValue(error);
      await actions.getSearchResultAction({ commit, dispatch }, data);
      expect(commit).toHaveBeenCalledWith("SET_ERROR", error);
    });
    it("getShowByNameAction should dispatch showDetailsByName with data returned by showDetailsByName Api method", async () => {
      const result = { data: { showId: 1 } };
      const showName = "testName";
      // Control mock to resolve with an array
      showDetailsByName.mockResolvedValue(result);
      await actions.getShowByNameAction({ commit, dispatch }, showName);
      expect(dispatch).toHaveBeenCalled();
    });

    it("getShowByNameAction should cacth en error when showDetailsByName Api throws error", async () => {
      const showName = "testName";
      showDetailsByName.mockRejectedValue(error);
      await actions.getShowByNameAction({ commit, dispatch }, showName);
      expect(commit).toHaveBeenCalledWith("SET_ERROR", error);
    });
  });
});
