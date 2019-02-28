<template>
  <div>
    <div :class="{ stroke: !task.isOpen, task }" @click="$emit('toggle')">{{ task.text }}</div>
    <button @click="$emit('delete')">x</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",

  props: {
    task: Object
  }
};
</script>

<style scoped>
.task {
  display: inline-block;
  padding: 10px;
  font-size: 1.5rem;
  cursor: pointer;
}
.stroke {
  text-decoration: line-through;
}
</style>
