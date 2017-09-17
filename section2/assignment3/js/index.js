new Vue({
  el: '#app',
  data: {
    value: 0
  },
  computed: {
    result: function() {
      return this.value !== 37 ? "not there yet" : "done";
    }
  },
  watch: {
    result: function() {
      let vm = this;
      setTimeout(function() {
        vm.value = 0;
      }, 5000);
    }
  }
});
