<script setup lang="ts">
import { inject, onMounted, reactive } from "vue";
import TodoListComponent from "../components/TodoListComponent.vue";
import Todo from "../entity/Todo";
import TodoList from "../entity/TodoList";
import TodosGateway from "../infra/gateway/TodosGateway";
import Observer from "../infra/observer/Observer";

const todoList: any = reactive(new TodoList());
todoList.on(
  new Observer("add-todo", function (todo: Todo) {
    console.log(todo);
  })
);
todoList.on(
  new Observer("delete-todo", function (todo: Todo) {
    console.log(todo);
  })
);

onMounted(async () => {
  const todosGateway = inject("todosGateway") as TodosGateway;
  const todosData = await todosGateway.getTodos();
  todoList.addTodos(todosData);
});
</script>

<template><TodoListComponent :todoList="todoList" /></template>

<style scoped></style>
