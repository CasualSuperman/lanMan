<template>
  <nav class="select-none">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="border-b border-teal-700">
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
                <router-link v-for="page of menuItems" :key="page.path" :to="page.path" active-class="menu-btn-active" class="menu-btn ml-4">{{page.name}}</router-link>
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
              <div @click="toggleProfile(true)" class="ml-3 relative">
                <button ref="profileToggle" @click.stop="toggleProfile" class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid">
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </button>
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
          <div class="-mr-2 flex md:hidden" ref="thumb">
            <div class="flex items-center px-3 float-right">
              <div class="mr-3 text-right transition-opacity duration-150 opacity-0" :class="{'opacity-100': menuOpen}">
                <div class="text-sm font-medium leading-none text-white">Tom Cook</div>
                <div class="mt-1 text-xs font-medium leading-none text-gray-400">tom@example.com</div>
              </div>
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </div>
            </div>
            <button @click="menuOpen = !menuOpen" class="inline-flex items-center justify-center p-2 rounded-md hover:text-white focus:outline-none no-highlight" :class="{'text-white': menuOpen, 'text-gray-400': !menuOpen}">
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path :class="{'hidden': menuOpen, 'inline-flex': !menuOpen }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path :class="{'hidden': !menuOpen, 'inline-flex': menuOpen }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div :class="{'block': menuOpen, 'hidden': !menuOpen}" class="md:hidden rounded-b mx-4 fade-grad">
      <div class="px-1 py-2 sm:px-3">
        <router-link v-for="page of menuItems" :key="page.path" :to="page.path" active-class="menu-btn-active" class="menu-btn block mt-1">{{page.name}}</router-link>
      </div>
      <div class="pt-2 pb-1 border-t border-gray-500">
        <div class="px-2 -pt-1 text-base font-normal text-gray-200">
          <a href="#" class="     block px-2 py-1 rounded-md hover:text-white hover:primary-bg focus:outline-none focus:text-white focus:primary-bg">Your Profile</a>
          <a href="#" class="mt-1 block px-2 py-1 rounded-md hover:text-white hover:primary-bg focus:outline-none focus:text-white focus:primary-bg">Settings</a>
          <a href="#" class="mt-1 block px-2 py-1 rounded-md hover:text-white hover:primary-bg focus:outline-none focus:text-white focus:primary-bg">Sign out</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="postcss">
  .no-highlight {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  .fade-grad {
    background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.3), transparent);
  }

  .menu-btn {
    @apply px-3 py-2 rounded-md font-medium text-teal-300 transition duration-150 ease-in-out text-base;
  }
  .menu-btn-md {
    /*  md:text-sm md:mt-1 md:mt-0 */
  }
  .menu-btn:hover {
    @apply bg-teal-800;
  }
  .menu-btn:focus {
    @apply outline-none text-white;
  }
  .menu-btn-active, .menu-btn-active:hover {
    @apply text-white bg-teal-900;
  }
  .menu-btn:first-of-type {
    @apply ml-0 mt-0;
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
        menuOpen: false,
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
      toggleProfile(e, force) {
        if (force !== undefined) {
          this.profileOpen = force;
        } else {
          this.profileOpen = !this.profileOpen;
        }
      },
      closeProfileMenu(e) {
        if (this.$refs.profileToggle.contains(e.target)) {
          return;
        }
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