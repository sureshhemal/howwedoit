<template>
  <div class="flex flex-col min-h-screen">
    <nav class="sticky top-0 z-50 bg-accent-500 shadow-lg text-white py-4">
      <div class="container mx-auto flex items-center justify-between px-4">
        <h1 class="text-2xl font-bold tracking-tight drop-shadow">Howwedoit</h1>
      </div>
    </nav>
    <main class="flex-1 container mx-auto w-full px-4 py-8">
      <NuxtPage />
    </main>
    <footer class="bg-gray-100 text-gray-700 py-4 mt-8">
      <div class="container mx-auto text-center px-4">
        <p>&copy; {{ new Date().getFullYear() }} Howwedoit. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { NuxtPage } from '#components'
</script>
