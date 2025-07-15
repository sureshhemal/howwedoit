<template>
  <div class="max-w-4xl mx-auto py-12">
    <div class="mb-8">
      <NuxtLink to="/" class="inline-flex items-center text-accent-500 hover:text-accent-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </NuxtLink>
    </div>

    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-accent-500 mb-4">Vue.js Mastery</h1>
      <p class="text-lg text-gray-600">Explore reactive components, state management, and creating smooth user interfaces.</p>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-lg mb-12">
      <h2 class="text-2xl font-semibold text-accent-500 mb-4">Latest Articles</h2>

      <!-- Placeholder for article list -->
      <div class="space-y-6">
        <p class="text-gray-500 italic">No articles yet. Check back soon!</p>
      </div>
    </div>

    <div class="bg-accent-50 p-6 rounded-lg border border-accent-100">
      <h2 class="text-xl font-semibold text-accent-600 mb-3">Category Overview</h2>
      <p class="mb-4">This section will feature in-depth articles about Vue.js development. Stay tuned for comprehensive guides on various aspects of the Vue.js framework, from basic concepts to advanced implementation strategies.</p>
    </div>
  </div>
</template>
