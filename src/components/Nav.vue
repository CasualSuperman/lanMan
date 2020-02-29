<template>
  <nav class="bg-gray-800 select-none">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="border-b border-gray-700">
        <div class="flex items-center justify-between h-16 px-4 sm:px-0">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <router-link to="/">
                <img class="h-8 w-8" src="@/assets/logo.png" alt="lanMan" />
              </router-link>
            </div>
          </div>
          <div class="hidden md:block flex-grow">
            <div class="ml-10 flex items-baseline">
              <template v-if="loggedIn">
                <router-link v-for="page of menuItems" :key="page.path" :to="page.path" active-class="menu-btn-active" class="menu-btn">{{page.name}}</router-link>
              </template>
              <template v-else>
                <router-link to="/login" class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-900">Login</router-link>
              </template>
            </div>
          </div>
          <div class="hidden md:block">
            <!--div class="ml-4 flex items-center md:ml-6">
              <template v-if="loggedIn">
                <button @click="logout" class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-transparent">Logout</button>
              </template>
              <template v-else>
                <router-link to="/login" class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-900">Login</router-link>
              </template-->
            <div class="ml-4 flex items-center md:ml-6">
              <div @click.stop="profileOpen = true" class="ml-3 relative">
                <div>
                  <button @click.stop="profileOpen = !profileOpen" class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid">
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </button>
                </div>
                <div v-if="profileOpen" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                  <div class="py-1 rounded-md bg-white shadow-xs">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden" ref="thumb">
          <button @click="menuOpen = !menuOpen" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path :class="{'hidden': menuOpen, 'inline-flex': !menuOpen }" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path :class="{'hidden': !menuOpen, 'inline-flex': menuOpen }" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div :class="{'block': menuOpen, 'hidden': !menuOpen}" class="hidden md:hidden">
      <div class="px-2 pt-2 pb-3 sm:px-3">
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Dashboard</a>
        <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Team</a>
        <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Projects</a>
        <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Calendar</a>
        <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Reports</a>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-white">Tom Cook</div>
            <div class="mt-1 text-sm font-medium leading-none text-gray-400">tom@example.com</div>
          </div>
        </div>
        <div class="mt-3 px-2">
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Your Profile</a>
          <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Settings</a>
          <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Sign out</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
  .menu-btn {
    @apply ml-4 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out text-gray-300;
  }
  .menu-btn:focus {
    @apply outline-none text-white;
  }
  .menu-btn-active {
    @apply text-white bg-gray-900;
  }
  .menu-btn:first {
    @apply ml-0;
  }
</style>

<script>
export default {
    props: {
        loggedIn: Boolean,
    },
    data() {
      return {
        profileOpen: false,
        menuOpen: true,
      };
    },
    mounted() {
      // Use capturing mode on this handler to ensure that we're the very first
      // thing that encounters it. If we didn't do this, other handlers may be
      // able to prevent us from seeing the click event by stopping it themselves.
      window.addEventListener("click", this.closeProfileMenu, true);
    },
    beforeDestroy() {
      window.removeEventListener("click", this.closeProfileMenu, true);
    },
    computed: {
      menuItems() {
        return this.$router.allRoutes().filter(route => route.meta && route.meta.mainPage);
      },
    },
    methods: {
      closeProfileMenu() {
        // Since we call .stop on clicks bubbling out of the profile menu, any
        // click picked up by this handler should close the profile menu.
        // Closing it when it's already closed is harmless, so I'm not bothering
        // to check the original value.
        this.profileOpen = false;
      },
      logout() {
        localStorage.removeItem('username');
        this.$router.push("/login");
      },
    },
}
</script>