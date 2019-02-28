<template>
  <div>
    <form>
      <label>
        <input type="text" :value="taskName" @change="changeHandle">
      </label>
      <button type="submit" @click="submitHandle">create</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TodoForm",

  data() {
    return {
      taskName: ""
    };
  },

  methods: {
    changeHandle(e) {
      this.taskName = e.target.value;
    },

    submitHandle(e) {
      e.preventDefault();
      this.$emit("task-create", this.taskName);
      this.taskName = "";
    }
  }
};
</script>

<style scoped>
</style>
