<template>
  <div id="app">
    <TodoForm @todo-create="createHandle"/>
    <TodoList :todos="todos" @todo-toogle="toogleHandle" @todo-delete="deleteHandle"/>
  </div>
</template>

<script>
import _ from "lodash";
import axios from "axios";
import { findIndexById } from "./helpers/collection-helper";
import { keysToCamelCase, keysToSnakeCase } from "./helpers/object-helper";

import TodoList from "./components/TodoList.vue";
import TodoForm from "./components/TodoForm.vue";

const todoApiEndpoint = "http://localhost:8888/todo/";

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
      const { data } = await axios.get(`${todoApiEndpoint}?format=json`);
      this.todos = data.map(keysToCamelCase);
    } catch (err) {
      console.log(err);
    }
  },

  methods: {
    createHandle: async function(name) {
      try {
        const { data } = await axios.post(todoApiEndpoint, { name });
        this.todos.push(keysToCamelCase(data));
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
        await axios.put(
          `${todoApiEndpoint}${todoId}/`,
          keysToSnakeCase(updatedtodo)
        );
        this.$set(this.todos, todoIndex, updatedtodo);
      } catch (err) {
        console.log(err);
      }
    },

    deleteHandle: async function(todoId) {
      try {
        await axios.delete(`${todoApiEndpoint}${todoId}/`);
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
