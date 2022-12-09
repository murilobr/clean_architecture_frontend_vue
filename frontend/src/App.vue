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
</script>

<template>
  <div class="total">Total: {{ getTotal() }}</div>
  <div class="completed">Completed: {{ getCompleted() }}%</div>
  <input class="todo-description-input" type="text" v-model="description" />
  <button class="add-todo-button" @click="addTodo(description)">add</button>
</template>

<style scoped></style>
