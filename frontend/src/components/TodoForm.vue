<template>
  <div>
    <form>
      <label>
        <input type="text" :value="name" @change="changeHandle">
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
      name: ""
    };
  },

  methods: {
    changeHandle(e) {
      this.name = e.target.value;
    },

    submitHandle(e) {
      e.preventDefault();
      this.$emit("todo-create", this.name);
      this.name = "";
    }
  }
};
</script>

<style scoped>
</style>
