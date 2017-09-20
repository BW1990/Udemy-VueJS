<template>
  <div>
    <h3>New Quote</h3>
    <button @click="counter++">Increase!</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  destroyed() {
    console.log("destroyed new");
  },
  deactivated() {
    console.log("Deactivated new");
  },
  activated() {
    console.log("activated new");
  }
}
</script>

<style scoped>

</style>
