import Vue from 'vue';
import VueResource from "vue-resource";
import App from './App.vue';

Vue.use(VueResource);

Vue.http.options.root = "https://udemy-vue-http-30527.firebaseio.com/";
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  next(response => {
    console.log(response);
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
