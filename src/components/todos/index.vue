<script setup lang="ts">
import { ref, reactive } from "vue";
import { TodoInfo } from "/@/types/todos";

const todoInfo: TodoInfo = reactive({
  newTodo: "",
  todos: [],
});

const addTodo = () => {
  var value = todoInfo.newTodo && todoInfo.newTodo.trim();
  if (!value) {
    return;
  }

  todoInfo.todos.push({
    id: "",
    title: value,
    completed: false,
  });

  todoInfo.newTodo = "";
};
</script>

<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs to be done?"
        v-model="todoInfo.newTodo"
        @keyup.enter="addTodo"
      />
    </header>
  </section>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
