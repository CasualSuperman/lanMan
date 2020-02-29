<template>
  <main-card class="container mx-auto">
      <div class="md:pt-2 leading-6 max-w-xs mx-auto">
      <form class="mx-auto p-10">
            <label for="real-name" class="block text-sm leading-5 font-medium text-gray-700">Real Name</label>
            <div class="mt-1 rounded-md shadow-sm max-w-xs">
                <input id="real-name" class="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5">
            </div>
            <label for="user-name" class="block text-sm leading-5 font-medium text-gray-700 mt-5">User Name</label>
            <div class="mt-1 rounded-md shadow-sm max-w-xs">
                <input id="user-name" class="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5">
            </div>
            <button type="button" class="border bg-blue-700 text-blue-100 py-3 px-2 w-full block mt-8 rounded-md font-semibold">Update</button>
        </form>
      </div>
  </main-card>
</template>

<script>
import MainCard from '@/components/MainCard.vue';

export default {
  name: 'UserSetting',
  components: {
    MainCard,
  }
}
</script>
