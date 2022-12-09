import { mount } from "@vue/test-utils";
import AppVue from "../src/App.vue";

test("Should test the todo list", function () {
  const wrapper = mount(AppVue, {});
  console.log(wrapper.html());
});
