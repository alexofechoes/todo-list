<template>
  <div id="app">
    <TodoForm @task-create="createHandle"/>
    <TodoList :tasks="tasks" @task-toogle="toogleHandle" @task-delete="deleteHandle"/>
  </div>
</template>

<script>
import _ from "lodash";
import axios from "axios";
import { keysToCamelCase, keysToSnakeCase } from './helpers/object-helper'

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
      tasks: []
    };
  },

  created: async function() {
    try {
      const { data } = await axios.get(`${todoApiEndpoint}?format=json`);
      this.tasks = data.map(keysToCamelCase);
    } catch (err) {
      console.log(err);
    }
  },

  methods: {
    createHandle: async function(text) {
      try {
        const { data } = await axios.post(todoApiEndpoint, { text });
        this.tasks.push(keysToCamelCase(data));
      } catch (err) {
        console.log(err);
      }
    },

    toogleHandle: async function(taskId) {
      const taskIndex = this.findTaskIndex(taskId);
      if (!taskIndex === null) {
        return;
      }

      const task = this.tasks[taskIndex];
      const updatedTask = { ...task, isOpen: !task.isOpen };
      try {
        await axios.put(`${todoApiEndpoint}${taskId}/`, keysToSnakeCase(updatedTask));
        this.$set(this.tasks, taskIndex, updatedTask);
      } catch (err) {
        console.log(err);
      }
    },

    deleteHandle: async function(taskId) {
      try {
        await axios.delete(`${todoApiEndpoint}${taskId}/`);
        this.$delete(this.tasks, this.findTaskIndex(taskId));
      } catch (err) {
        console.log(err);
      }
    },

    findTaskIndex(taskId) {
      return this.tasks.findIndex(task => task.id === taskId);
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
