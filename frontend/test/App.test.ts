import { mount } from "@vue/test-utils";
import AppVue from "../src/App.vue";

test("Should test an empty todo list", async function () {
  const wrapper = mount(AppVue, {});
  expect(wrapper.get(".total").text()).toBe("Total: 0");
  expect(wrapper.get(".completed").text()).toBe("Completed: 0%");
});

test("Should test the todo list", async function () {
  const wrapper = mount(AppVue, {});
  await wrapper.get(".todo-description-input").setValue("A");
  await wrapper.get(".add-todo-button").trigger("click");
  expect(wrapper.get(".total").text()).toBe("Total: 1");
  expect(wrapper.get(".completed").text()).toBe("Completed: 0%");
  expect(wrapper.findAll(".todo-description").at(0)?.text()).toBe("A");
  expect(wrapper.findAll(".todo-done").at(0)?.text()).toBe("false");
  await wrapper.get(".todo-description-input").setValue("B");
  await wrapper.get(".add-todo-button").trigger("click");
  expect(wrapper.get(".total").text()).toBe("Total: 2");
  await wrapper.findAll(".todo-toggle-done-button").at(0)?.trigger("click");
  expect(wrapper.findAll(".todo-done").at(0)?.text()).toBe("true");
  expect(wrapper.get(".completed").text()).toBe("Completed: 50%");
  await wrapper.findAll(".todo-delete-button").at(0)?.trigger("click");
  expect(wrapper.get(".total").text()).toBe("Total: 1");
  expect(wrapper.get(".completed").text()).toBe("Completed: 0%");
});

test("Should not let insert duplicated todo", async function () {
  const wrapper = mount(AppVue, {});
  await wrapper.get(".todo-description-input").setValue("A");
  await wrapper.get(".add-todo-button").trigger("click");
  await wrapper.get(".todo-description-input").setValue("A");
  await wrapper.get(".add-todo-button").trigger("click");
  expect(wrapper.get(".total").text()).toBe("Total: 1");
  expect(wrapper.get(".completed").text()).toBe("Completed: 0%");
});
