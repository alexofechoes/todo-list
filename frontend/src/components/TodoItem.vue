<template>
  <div v-bind:class="{ stroke: !task.isOpen, task }">{{ task.text }}</div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    task: Object
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
