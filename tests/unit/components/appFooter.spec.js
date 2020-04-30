import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import appFooter from "../../../src/components/AppFooter.vue";

describe("In appFooterWrapper Component", () => {
  let appFooterWrapper;

  beforeEach(() => {
    Vue.use(Vuetify);
    Vue.use(VueRouter);
    appFooterWrapper = shallowMount(appFooter, {
      Vue
    });
  });

  afterEach(() => {
    appFooterWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(appFooterWrapper.isVueInstance).toBeTruthy();
  });

  it("it renders the v-footer markup", () => {
    expect(appFooterWrapper.contains("v-footer-stub")).toBe(true);
  });

  it("it renders the v-layout markup", () => {
    expect(appFooterWrapper.contains("v-layout-stub")).toBe(true);
  });

  it("it renders the v-flex markup", () => {
    expect(appFooterWrapper.contains("v-flex-stub")).toBe(true);
  });
});
