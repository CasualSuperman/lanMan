<template>
  <div>
    <div class="bg-gray-800 pb-32">
      <header-nav v-if="loggedIn" :loggedIn="loggedIn"/>
      <header class="py-10">
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
      return localStorage.getItem("username") !== null;
    },
  }
}
</script>
