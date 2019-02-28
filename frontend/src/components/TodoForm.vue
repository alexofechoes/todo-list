<template>
  <div>
    <form>
      <label>
        <input type="text" :value="text" @change="changeHandle">
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
      text: ""
    };
  },

  methods: {
    changeHandle(e) {
      this.text = e.target.value;
    },
    submitHandle(e) {
      e.preventDefault();
      this.$emit("task-create", this.text);
      this.text = "";
    }
  }
};
</script>

<style scoped>
</style>
