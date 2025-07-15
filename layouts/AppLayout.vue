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
    <footer class="bg-gray-100 text-gray-700 py-8 mt-8 border-t border-gray-200">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-full overflow-hidden shadow-md">
              <img src="/images/suresh-hemal.png" alt="Suresh Hemal" class="w-full h-full object-cover" onerror="this.src='https://ui-avatars.com/api/?name=Suresh+Hemal&background=2B463C&color=fff'">
            </div>
            <div>
              <h3 class="text-xl font-bold text-primary-600">Suresh Hemal</h3>
              <p class="text-gray-600">Laravel & Vue.js Developer</p>
            </div>
          </div>

          <div class="flex flex-col md:flex-row gap-6 items-center">
            <a href="mailto:your-email@example.com" class="flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              sureshhemal123@gmail.com
            </a>
            <a href="https://github.com/sureshhemal" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              sureshhemal
            </a>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>&copy; {{ new Date().getFullYear() }} Howwedoit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { NuxtPage } from '#components'
</script>
