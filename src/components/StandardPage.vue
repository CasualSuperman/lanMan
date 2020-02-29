<template>
  <div>
    <div class="primary-bg pb-32">
      <header-nav v-if="loggedIn" :loggedIn="loggedIn"/>
      <header class="pt-4 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl leading-9 font-bold text-white">
            {{$route.name}}
          </h2>
        </div>
      </header>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
  .primary-bg {
    background-image: linear-gradient(90deg, rgba(44,122,123,1) 0%, rgba(43,108,176,1) 100%);
  }
</style>

<script>
import HeaderNav from '@/components/Nav.vue';

export default {
  name: 'StandardPage',
  components: {
    HeaderNav,
  },
  props: {
    pageName: String,
  },
  methods: {
    logout() {
      localStorage.removeItem('username');
      this.$router.push("/login");
    },
  },
  computed: {
    loggedIn() {
      return true; //localStorage.getItem("username") !== null;
    },
  }
}
</script>
