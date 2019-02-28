<template>
  <div>
    <h1>todo list</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <TodoItem
          :todo="todo"
          @toggle="$emit('todo-toogle', todo.id)"
          @delete="$emit('todo-delete', todo.id)"
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
    todos: Array
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
