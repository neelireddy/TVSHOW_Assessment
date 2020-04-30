import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import allShowsComponent from "../../../src/components/AllShows.vue";
import { routes } from "../../../src/router/index";

describe("In allShowsWrapper Component", () => {
  let allShowsWrapper;
  let mockStore;
  let allShows = [];
  const route = new VueRouter({ routes });

  beforeEach(() => {
    Vue.use(Vuetify);
    Vue.use(VueRouter);
    mockStore = {
      state: {
        allShows
      },
      dispatch: jest.fn()
    };
    allShowsWrapper = shallowMount(allShowsComponent, {
      mocks: {
        $store: mockStore
      },
      Vue,
      route
    });
  });

  afterEach(() => {
    allShowsWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(allShowsWrapper.isVueInstance).toBeTruthy();
  });

  it("it renders the correct markup", () => {
    expect(allShowsWrapper.contains("v-container-stub")).toBe(true);
  });

  it("it should test getAllShows function", done => {
    allShowsWrapper.vm.getAllShows();
    expect(allShowsWrapper.vm.$store.dispatch).toHaveBeenCalledWith(
      "getAllShowsAction"
    );
    done();
  });

  it("it should test onShowSelect function", done => {
    const movie = { id: 1 };
    const response = "Joker";
    jest
      .spyOn(allShowsWrapper.vm.$store, "dispatch")
      .mockReturnValue(Promise.resolve(response));
    allShowsWrapper.vm.onShowSelect(movie);
    expect(allShowsWrapper.vm.$store.dispatch).toHaveBeenCalledWith(
      "getShowDetailsByIdAction",
      1
    );
    done();
  });

  it("it should test sortTvShow function", () => {
    const value1 = {
      rating: {
        average: 8.5
      }
    };
    const value2 = {
      rating: {
        average: 9.6
      }
    };
    const result = allShowsWrapper.vm.sortTvShow(value1, value2);
    expect(result).toEqual(1);
  });
  it("it should test sortTvShow function", () => {
    const value1 = {
      rating: {
        average: 9.6
      }
    };
    const value2 = {
      rating: {
        average: 8.5
      }
    };
    const result = allShowsWrapper.vm.sortTvShow(value1, value2);
    expect(result).toEqual(-1);
  });
});
