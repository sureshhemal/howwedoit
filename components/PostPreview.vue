<template>
  <div class="block group">
    <div
      class="relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:-translate-y-1 cursor-pointer"
      @click="navigateToPost"
    >
      <!-- Card image (if available) -->
      <div v-if="post.image" class="relative h-48 overflow-hidden">
        <img :src="post.image" :alt="post.title" class="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105">
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/>
      </div>

      <div
          class="absolute inset-0 rounded-lg ring-1 ring-gray-200 group-hover:ring-2 transition-all duration-300"
           :class="`group-hover:ring-${colorScheme}-200 group-hover:shadow-lg group-hover:shadow-${colorScheme}-100/50`"
      />

      <div class="p-6 relative z-10" :class="{ 'pt-4': post.image }">
        <!-- Tags if available -->
        <div v-if="post.tags && post.tags.length" class="flex flex-wrap gap-2 mb-3">
          <span
            v-for="tag in post.tags"
            :key="tag"
            :class="`text-xs font-medium px-2 py-1 rounded-md bg-${colorScheme}-50 text-${colorScheme}-700 transition-colors group-hover:bg-${colorScheme}-100`"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Title -->
        <h3 class="text-xl font-bold mb-2" :class="`text-${colorScheme}-600 group-hover:text-${colorScheme}-500 transition-colors duration-300`">
          {{ post.title }}
        </h3>

        <!-- Date & reading time -->
        <div class="flex items-center text-sm text-gray-500 mb-3">
          <div class="flex items-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {{ post.date }}
          </div>
          <div v-if="post.readTime" class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ post.readTime }} min read
          </div>
        </div>

        <!-- Description -->
        <p class="text-gray-600 line-clamp-2">{{ post.description }}</p>

        <!-- Read more link -->
        <div class="mt-4 flex justify-end">
          <span :class="`inline-flex items-center text-${colorScheme}-500 group-hover:text-${colorScheme}-600 font-medium transition-colors`">
            Read more
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '~/types'
import { navigateTo } from '#imports'

const props = defineProps({
  post: {
    type: Object as () => Post,
    required: true,
  },
  colorScheme: {
    type: String,
    default: 'primary',
  },
})

// Simple navigation to the post's path without passing state
const navigateToPost = () => {
  navigateTo(props.post.path)
}
</script>
