<template>
  <div>
    <div :class="{ stroke: !todo.isOpen, todo }" @click="$emit('toggle')">{{ todo.name }}</div>
    <button @click="$emit('delete')">x</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",

  props: {
    todo: Object
  }
};
</script>

<style scoped>
.todo {
  display: inline-block;
  padding: 10px;
  font-size: 1.5rem;
  cursor: pointer;
}
.stroke {
  text-decoration: line-through;
}
</style>
