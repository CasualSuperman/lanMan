<template>
  <main class="-mt-32">
    <div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-lg shadow px-5 py-5 sm:px-6">
        <slot />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "MainCard",
}
</script>