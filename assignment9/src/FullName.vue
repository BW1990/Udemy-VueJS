<template>
  <div class="form-group">
    <label for="fullName">Full Name</label>
    <input
      type="text"
      id="fullName"
      class="form-control"
      :value="value"
      @input="updateValue"
    >
  </div>
</template>

<script>
  export default {
    props: ["value"],
    methods: {
      updateValue(event) {
        this.$emit("input", event.target.value);
      }
    }
  }
</script>

<style>

</style>
