import { mount } from "@vue/test-utils";
import AppVue from "../src/App.vue";

test("Should test the todo list", async function () {
  const wrapper = mount(AppVue, {});
  await wrapper.get(".todo-description-input").setValue("A");
  await wrapper.get(".add-todo-button").trigger("click");
  expect(wrapper.get(".total").text()).toBe("Total: 3");
  expect(wrapper.get(".completed").text()).toBe("Completed: 33%");
});
