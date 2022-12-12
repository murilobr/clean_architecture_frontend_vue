import { mount } from "@vue/test-utils";
import AppVue from "../src/App.vue";
import TodoList from "../src/entity/TodoList";
import TodosGateway from "../src/infra/gateway/TodosGateway";
import TodoListComponentVue from "../src/components/TodoListComponent.vue";

test("Should test an empty todo list", async function () {
  const todoList = new TodoList();
  todoList.addTodo("My first todo", true);
  const wrapper = mount(TodoListComponentVue, {
    props: {
      todoList,
    },
  });
  expect(wrapper.get(".total").text()).toBe("Total: 1");
  expect(wrapper.get(".completed").text()).toBe("Completed: 100%");
});

test("Should test the todo list", async function () {
  const todoList = new TodoList();
  todoList.addTodo("My first todo", true);
  const wrapper = mount(TodoListComponentVue, {
    props: {
      todoList,
    },
  });
  await wrapper.get(".todo-description-input").setValue("A");
  await wrapper.get(".add-todo-button").trigger("click");
  expect(wrapper.get(".total").text()).toBe("Total: 2");
  expect(wrapper.get(".completed").text()).toBe("Completed: 50%");
  expect(wrapper.findAll(".todo-description").at(1)?.text()).toBe("A");
  expect(wrapper.findAll(".todo-done").at(1)?.text()).toBe("false");
  await wrapper.get(".todo-description-input").setValue("B");
  await wrapper.get(".add-todo-button").trigger("click");
  expect(wrapper.get(".total").text()).toBe("Total: 3");
  await wrapper.findAll(".todo-toggle-done-button").at(1)?.trigger("click");
  expect(wrapper.findAll(".todo-done").at(1)?.text()).toBe("true");
  expect(wrapper.get(".completed").text()).toBe("Completed: 67%");
  await wrapper.findAll(".todo-delete-button").at(1)?.trigger("click");
  expect(wrapper.get(".total").text()).toBe("Total: 2");
  expect(wrapper.get(".completed").text()).toBe("Completed: 50%");
});

test("Should not let insert duplicated todo", async function () {
  const todoList = new TodoList();
  todoList.addTodo("My first todo", true);
  const wrapper = mount(TodoListComponentVue, {
    props: {
      todoList,
    },
  });
  await wrapper.get(".todo-description-input").setValue("A");
  await wrapper.get(".add-todo-button").trigger("click");
  await wrapper.get(".todo-description-input").setValue("A");
  await wrapper.get(".add-todo-button").trigger("click");
  expect(wrapper.get(".total").text()).toBe("Total: 2");
  expect(wrapper.get(".completed").text()).toBe("Completed: 50%");
});
