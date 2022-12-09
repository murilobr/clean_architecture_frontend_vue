<script setup lang="ts">
import { inject, onMounted, reactive } from "vue";
import TodoList from "./entity/TodoList";
import TodosGateway from "./infra/gateway/TodosGateway";

const todoList: any = reactive(new TodoList());
const description = "";

onMounted(async () => {
  const todosGateway = inject("todosGateway") as TodosGateway;
  const todosData = await todosGateway.getTodos();
  todoList.addTodos(todosData);
});
</script>

<template>
  <div class="total">Total: {{ todoList.getTotal() }}</div>
  <div class="completed">Completed: {{ todoList.getCompleted() }}%</div>
  <div v-for="todo in todoList.todos">
    <div class="todo-description">{{ todo.description }}</div>
    <div class="todo-done">{{ todo.done }}</div>
    <button class="todo-toggle-done-button" @click="todo.toggleDone()">
      done/undone
    </button>
    <button class="todo-delete-button" @click="todoList.deleteTodo(todo)">
      delete
    </button>
  </div>
  <input class="todo-description-input" type="text" v-model="description" />
  <button class="add-todo-button" @click="todoList.addTodo(description)">
    add
  </button>
</template>

<style scoped></style>
