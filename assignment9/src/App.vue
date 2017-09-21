<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->
          <app-full-name v-model="userData.fullName"></app-full-name>
          <div class="form-group">
            <label for="userEmail">Email</label>
            <input
              type="email"
              id="userEmail"
              class="form-control"
              v-model="userData.email"
            >
          </div>
          <div class="form-group">
            <label for="userpassword">Password</label>
            <input
              type="text"
              id="userpassword"
              class="form-control"
              v-model="userData.password"
            >
          </div>
          <div class="form-group">
            <label for="dataYes">
              <input
              type="radio"
              id="dataYes"
              value="Yes"
              v-model="userData.storeData"> Store Data
            </label>
            <label for="dataNo">
              <input
              type="radio"
              id="dataNo"
              value="No"
              v-model="userData.storeData"> Do Not Store Data
            </label>
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            @click.prevent="submitForm">Submit</button>

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ userData.fullName }}</p>
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Store in Database?: {{ userData.storeData }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from "./FullName.vue";
export default {
  data() {
    return {
      userData: {
        fullName: "",
        email: "",
        password: "",
        storeData: "Yes"
      },
      isSubmitted: false
    }
  },
  methods: {
    submitForm() {
      this.isSubmitted = true;
    }
  },
  components: {
    appFullName: FullName
  }
}
</script>

<style>
</style>
