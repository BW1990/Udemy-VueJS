new Vue({
  el: '#exercise',
  data: {
    name: "Brian",
    age: 27,
    image: "https://d1067y8t86k9le.cloudfront.net/wp-content/uploads/2017/03/29223213/vuejs-logo.jpg"
  },
  methods: {
    ageMultiplier: function(multiplyBy) {
      return this.age * multiplyBy;
    },
    random: function() {
      return Math.random();
    }
  }
});
