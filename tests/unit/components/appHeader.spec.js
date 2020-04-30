import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import appHeader from "../../../src/components/AppHeader.vue";
import { routes } from "../../../src/router/index";

jest.useFakeTimers();
describe("In app-header Component", () => {
  let appHeaderWrapper;
  let mockStore;
  const route = new VueRouter({ routes });

  beforeEach(() => {
    jest.spyOn(global, "setTimeout");
    Vue.use(Vuetify);
    Vue.use(VueRouter);
    mockStore = {
      state: {},
      dispatch: jest.fn(),
      then: jest.fn()
    };
    appHeaderWrapper = shallowMount(appHeader, {
      mocks: {
        $store: mockStore
      },
      Vue,
      route
    });
  });

  afterEach(() => {
    appHeaderWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(appHeaderWrapper.isVueInstance).toBeTruthy();
  });

  it("it renders the correct markup", () => {
    expect(appHeaderWrapper.contains("v-toolbar-stub")).toBe(true);
  });

  it("it should have a <v-toolbar-title> element", () => {
    expect(appHeaderWrapper.contains("v-toolbar-title-stub")).toBe(true);
  });

  it("it should have a <v-autocomplete> element", () => {
    expect(appHeaderWrapper.contains("v-autocomplete-stub")).toBe(true);
  });

  it("it should test search in watcher", done => {
    jest.spyOn(appHeaderWrapper.vm, "searchshows");
    appHeaderWrapper.vm.$options.watch.search.call(appHeaderWrapper.vm, "x");
    expect(appHeaderWrapper.vm.isLoading).toBe(true);
    expect(appHeaderWrapper.vm.searchshows).toHaveBeenCalled();
    done();
  });

  it("it should test searchValue in watcher", done => {
    jest.spyOn(appHeaderWrapper.vm, "goToDetailPage");
    const response = "Joker";
    jest
      .spyOn(appHeaderWrapper.vm.$store, "dispatch")
      .mockReturnValue(Promise.resolve(response));
    appHeaderWrapper.vm.$options.watch.searchValue.call(
      appHeaderWrapper.vm,
      "abc"
    );
    expect(appHeaderWrapper.vm.goToDetailPage).toHaveBeenCalled();
    done();
  });

  // it("it should test searchshows function", (done) => {
  //   const value = "Joker";
  //   const response = "Joker";
  //   jest.spyOn(appHeaderWrapper.vm.$store, 'dispatch').mockReturnValue(Promise.resolve(response));
  //   appHeaderWrapper.vm.searchshows(value);
  //   expect(appHeaderWrapper.vm.isLoading).toBeTruthy();
  //   expect(setTimeout).toBeCalledTimes(1);
  //   expect(setTimeout).toBeCalledWith(expect.any(Function), 1000);
  //   expect(appHeaderWrapper.vm.$store.dispatch).toHaveBeenCalledWith('getSearchResultAction');
  //   done();
  // });

  it("it should test goToDetailPage function", done => {
    const value = "Mr. H";
    const response = "Joker";
    jest
      .spyOn(appHeaderWrapper.vm.$store, "dispatch")
      .mockReturnValue(Promise.resolve(response));
    appHeaderWrapper.vm.goToDetailPage(value);
    expect(appHeaderWrapper.vm.$store.dispatch).toHaveBeenCalledWith(
      "getShowByNameAction",
      "Mr. H"
    );
    done();
  });
});
