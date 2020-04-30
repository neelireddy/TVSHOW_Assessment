import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import app from "../../src/App.vue";
import appHeader from "../../src/components/AppHeader.vue";
import Vuetify from "vuetify";
import Vue from "vue";
describe("In App Component", () => {
  let appWrapper;
  const router = new VueRouter({ path: "/", name: "home" });
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    Vue.use(Vuetify);
    appWrapper = shallowMount(app, {
      localVue,
      router
    });
  });
  afterEach(() => {
    appWrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(appWrapper.isVueInstance).toBeTruthy();
  });
  it("renders the correct markup", () => {
    expect(appWrapper.html()).toContain('<v-app-stub id="app">');
  });
  describe("it should load appHeader component", () => {
    it("it should load the app-header", () => {
      expect(appHeader).toBeTruthy();
    });
    it("it should have a <app-header-stub></app-header-stub>", () => {
      expect(appWrapper.html()).toContain(
        '<app-header-stub></app-header-stub>'
      );
    });
  });
});
