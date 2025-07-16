<template>
  <BlogLayout>
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold text-accent-500 mb-4">Vue.js Mastery</h1>
      <p class="text-lg text-gray-600">Explore reactive components, state management, and creating smooth user interfaces.</p>
    </div>

    <!-- Category Overview moved up -->
    <div class="bg-accent-50 p-6 rounded-lg border border-accent-100 mb-12">
      <h2 class="text-xl font-semibold text-accent-600 mb-3">Category Overview</h2>
      <p class="mb-4">This section will feature in-depth articles about Vue.js development. Stay tuned for comprehensive guides on various aspects of the Vue.js framework, from basic concepts to advanced implementation strategies.</p>
    </div>

    <!-- Latest Articles section -->
    <div class="mb-12">
      <h2 class="text-2xl font-semibold text-accent-500 mb-6">Latest Articles</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="post in latestPosts" :key="post.path">
          <PostPreview :post="post" color-scheme="accent" />
        </div>
      </div>
    </div>

    <!-- All Articles section -->
    <div class="mb-12">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-semibold text-accent-500">All Articles</h2>

        <!-- Optional: Add sorting or filtering controls here -->
        <div class="flex items-center gap-2">
          <span class="text-sm text-gray-500">{{ allPosts.length }} {{ allPosts.length === 1 ? 'article' : 'articles' }}</span>
        </div>
      </div>

      <!-- List layout for all articles -->
      <div class="space-y-6">
        <div v-for="post in allPosts" :key="post.path"
             class="bg-white p-4 rounded-lg shadow border border-gray-100 hover:border-accent-200 transition-colors">
          <NuxtLink :to="post.path" class="group block">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-semibold text-accent-600 group-hover:text-accent-500 transition-colors">{{ post.title }}</h3>
                <p class="text-gray-600 mt-1 line-clamp-2">{{ post.description }}</p>
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
              <span v-for="tag in post.tags" :key="tag"
                    class="text-xs font-medium px-2 py-1 rounded-md bg-accent-50 text-accent-600">
                {{ tag }}
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </BlogLayout>
</template>

<script setup lang="ts">
import PostPreview from '~/components/PostPreview.vue'
import BlogLayout from '~/layouts/BlogLayout.vue'
import { getLatestPosts, vuePosts } from '~/data/posts'

// Get the latest 2 Vue posts for the featured section
const latestPosts = getLatestPosts(2, 'vue')

// Get all Vue posts for the complete listing
const allPosts = vuePosts
</script>
