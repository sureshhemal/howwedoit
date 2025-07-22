<template>
  <div class="space-y-6">
    <div
      v-for="post in posts" :key="post.path"
      class="bg-white p-4 rounded-lg shadow border border-gray-100 hover:border-primary-200 transition-colors"
    >
      <NuxtLink :to="post.path" class="group block">
        <div class="flex justify-between items-start">
          <div class="flex items-start gap-4">
            <!-- Article image preview -->
            <img
              v-if="post.image"
              :src="post.image"
              :alt="post.title"
              class="w-20 h-20 object-cover rounded-md border border-gray-100 bg-white flex-shrink-0"
            />
            <div>
              <h3 class="text-lg font-semibold text-primary-600 group-hover:text-primary-500 transition-colors">{{ post.title }}</h3>
              <p class="text-gray-600 mt-1 line-clamp-2">{{ post.description }}</p>
            </div>
          </div>
          <div class="flex items-center text-sm text-gray-500 whitespace-nowrap ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {{ post.date }}
          </div>
        </div>
        <!-- Display tags if available -->
        <div v-if="post.tags && post.tags.length" class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="tag in post.tags" :key="tag"
            class="text-xs font-medium px-2 py-1 rounded-md bg-primary-50 text-primary-600">
            {{ tag }}
          </span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '~/types';

defineProps<{
  posts: Array<Post>
}>()
</script> 