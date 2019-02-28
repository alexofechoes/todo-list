<template>
  <div>
    <h1>todo</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <TodoItem
          :task="task"
          @toggle="$emit('task-toogle', task.id)"
          @delete="$emit('task-delete', task.id)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",

  components: {
    TodoItem
  },

  props: {
    tasks: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
