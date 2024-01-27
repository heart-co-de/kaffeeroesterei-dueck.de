<template>
  <footer class="bg-white/50 backdrop-blur bottom-0 fixed inset-x-0">
    <div class="mx-auto max-w-7xl overflow-hidden px-6 py-2 sm:py-4 lg:px-8">
      <nav class="-mb-6 flex justify-center space-x-4" aria-label="Footer">
        <div v-for="item in navigation.main" :key="item.name" class="pb-6">
          <NuxtLink
            :href="item.href"
            class="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >{{ item.name }}</NuxtLink
          >
        </div>
      </nav>
      <p class="text-center text-xs leading-5 text-gray-500">
        &copy; 2023 Kaffeerösterei Dück
      </p>
    </div>
  </footer>
</template>

<script setup>
const navigation = {
  main: [
    { name: "Bestellen", href: "/" },
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
    { name: "AGB", href: "/agb" },
  ],
}
</script>
