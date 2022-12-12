<script setup lang="ts">
import { inject, onMounted, reactive } from "vue";
import TodoListComponent from "../components/TodoListComponent.vue";
import TodoList from "../entity/TodoList";
import TodosGateway from "../infra/gateway/TodosGateway";

const todoList: any = reactive(new TodoList());

onMounted(async () => {
  const todosGateway = inject("todosGateway") as TodosGateway;
  const todosData = await todosGateway.getTodos();
  todoList.addTodos(todosData);
});
</script>

<template><TodoListComponent :todoList="todoList" /></template>

<style scoped></style>
