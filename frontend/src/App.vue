<script setup lang="ts">
const todos = [
  { description: "Create unit tests", done: false },
  { description: "Create integration tests", done: false },
  { description: "Create e2e tests", done: true },
];
function getTotal() {
  return todos.length;
}
function getCompleted() {
  const total = getTotal();
  const completed = todos.filter((todo) => todo.done).length;
  console.log(completed, total);
  return Math.round((completed / total) * 100);
}
</script>

<template>
  <div class="total">Total: {{ getTotal() }}</div>
  <div class="completed">Completed: {{ getCompleted() }}%</div>
</template>

<style scoped></style>
