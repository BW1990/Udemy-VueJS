new Vue({
  el: '#app',
  data: {
    name: "Brian",
    counter: 0,
    secondCounter: 0,
    link: "http://google.ca"
  },
  computed: {
    output() {
      console.log("Computed");
      return this.counter > 5 ? "Greater than 5" : "Smaller than 5";
    }
  },
  watch: {
    counter: function(value) {
      let vm = this;
      setTimeout(function() {
        vm.counter = 0;
      }, 2000);
    }
  },
  methods: {
    result() {
      console.log("Method");
      return this.counter > 5 ? "Greater than 5" : "Smaller than 5";
    },
    changeLink: function() {
      this.link = "http://apple.com"
    }
  }
});
