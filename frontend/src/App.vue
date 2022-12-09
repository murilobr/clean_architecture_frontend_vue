<script setup lang="ts">
import { reactive } from "vue";

const todos: any = reactive([]);
const description = "";

function getTotal() {
  return todos.length;
}

function getCompleted() {
  const total = getTotal();
  const completed = todos.filter((todo: any) => todo.done).length;
  console.log(completed, total);
  return Math.round((completed / total) * 100);
}

function addTodo(description: string) {
  todos.push({ description, done: false });
}

function toggleDone(todo: any) {
  todo.done = !todo.done;
}
</script>

<template>
  <div class="total">Total: {{ getTotal() }}</div>
  <div class="completed">Completed: {{ getCompleted() }}%</div>
  <div v-for="todo in todos">
    <div class="todo-description">{{ todo.description }}</div>
    <div class="todo-done">{{ todo.done }}</div>
    <button class="todo-toggle-done-button" @click="toggleDone(todo)">
      done/undone
    </button>
  </div>
  <input class="todo-description-input" type="text" v-model="description" />
  <button class="add-todo-button" @click="addTodo(description)">add</button>
</template>

<style scoped></style>
