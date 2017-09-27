<template>
  <div>
    <h3>Some User Details</h3>
    <p>Loaded ID: {{ $route.params.id }}</p>
    <hr>
    <router-link
      tag="button"
      :to="link"
      class="btn btn-primary"
    >Edit User</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: { name: 'userEdit',
              params: { id: this.$route.params.id },
              query: { locale: 'en' },
              hash: '#data'
            }
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('in component beforeRouteEnter');
    if (true) {
      next();
    } else {
      next(false);
    }
  }
}
</script>
