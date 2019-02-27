<template>
  <div id="app">
    <TodoList :tasks="tasks" @task-toogle="toogleHandle"/>
  </div>
</template>

<script>
import _ from "lodash";
import TodoList from "./components/TodoList.vue";

todoApiEndpoint = "http://localhost:8888/todo/?format=json";

export default {
  name: "app",

  components: {
    TodoList
  },
  created() {
    fetch(todoApiEndpoint, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(tasks => {
        this.tasks = tasks.map(task =>
          _.mapKeys(task, (v, k) => _.camelCase(k))
        );
      })
      .catch(err => console.log("error", err));
  },
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    toogleHandle(taskId) {
      const taskIndex = this.tasks.findIndex(task => task.id === taskId);
      if (!taskIndex === null) {
        return;
      }
      const task = this.tasks[taskIndex];
      this.$set(this.tasks, taskIndex, { ...task, isOpen: !task.isOpen });
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
