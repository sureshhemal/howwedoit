<template>
  <div class="max-w-4xl mx-auto py-12">
    <!-- Back navigation button -->
    <div class="mb-8">
      <NuxtLink :to="backLink" class="inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-200 text-gray-700 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {{ backText }}
      </NuxtLink>
    </div>

    <!-- Main content -->
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// Get the current route
const route = useRoute();

// Determine back link and text based on current path
const backLink = computed(() => {
  const path = route.path;

  // If we're on a category index page (like /laravel, /vue, /fullstack)
  // Then we go back to the home page
  if (path === '/laravel' || path === '/vue' || path === '/fullstack') {
    return '/';
  }

  // Otherwise, we're on a detail page, so extract the category
  const pathParts = path.split('/');
  // If it's a nested route with at least 2 parts (e.g., /laravel/something)
  if (pathParts.length > 2) {
    // Go back to the category index
    return `/${pathParts[1]}`;
  }

  // Fallback to home
  return '/';
});

const backText = computed(() => {
  const path = route.path;

  // If we're on a category index page (like /laravel, /vue, /fullstack)
  if (path === '/laravel' || path === '/vue' || path === '/fullstack') {
    return 'Back to Home';
  }

  // Otherwise, we're on a detail page, so extract the category
  const pathParts = path.split('/');
  if (pathParts.length > 2) {
    const category = pathParts[1];
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
    return `Back to ${categoryName}`;
  }

  // Fallback
  return 'Back';
});
</script>
