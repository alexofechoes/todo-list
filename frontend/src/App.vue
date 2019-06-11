<template>
  <div id="app">
    <TodoForm @todo-create="createHandle"/>
    <TodoList :todos="todos" @todo-toogle="toogleHandle" @todo-delete="deleteHandle"/>
  </div>
</template>

<script>
import { fetchTodoList, createTodo, updateTodo, deleteTodo } from "./api/todo-api";
import { findIndexById } from "./helpers/collection-helper";
import { keysToCamelCase, keysToSnakeCase } from "./helpers/object-helper";

import TodoList from "./components/TodoList.vue";
import TodoForm from "./components/TodoForm.vue";

export default {
  name: "app",

  components: {
    TodoList,
    TodoForm
  },

  data() {
    return {
      todos: []
    };
  },

  created: async function() {
    try {
      const todoListData = await fetchTodoList();
      this.todos = todoListData.map(keysToCamelCase);
    } catch (err) {
      console.log(err);
    }
  },

  methods: {
    createHandle: async function(name) {
      try {
        const todoData = await createTodo(name);
        this.todos.push(keysToCamelCase(todoData));
      } catch (err) {
        console.log(err);
      }
    },

    toogleHandle: async function(todoId) {
      const todoIndex = findIndexById(this.todos, todoId);
      if (todoIndex === null) {
        return;
      }

      const todo = this.todos[todoIndex];
      const updatedtodo = { ...todo, isOpen: !todo.isOpen };
      try {
        await updateTodo(todoId, keysToSnakeCase(updatedtodo));
        this.$set(this.todos, todoIndex, updatedtodo);
      } catch (err) {
        console.log(err);
      }
    },

    deleteHandle: async function(todoId) {
      try {
        await deleteTodo(todoId);
        this.$delete(this.todos, findIndexById(this.todos, todoId));
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
