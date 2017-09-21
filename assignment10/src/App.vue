<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <button v-local-on:click="clicked" class="btn btn-primary">Click Me</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    'local-on': {
      bind(el, binding) {
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      }
    }
  },
  methods: {
    clicked() {
      alert("Clicky Click")
    }
  }
}
</script>

<style>
</style>
