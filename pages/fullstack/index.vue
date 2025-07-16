<template>
  <BlogLayout>
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold text-primary-500 mb-4">Full-Stack Integration</h1>
      <p class="text-lg text-gray-600">Learn how to seamlessly connect Laravel backends with Vue.js frontends for modern apps.</p>
    </div>

    <!-- Category Overview moved up -->
    <div class="bg-gradient-to-r from-primary-50 to-accent-50 p-6 rounded-lg border border-primary-100 mb-12">
      <h2 class="text-xl font-semibold mb-3" style="color: #3d6153;">Category Overview</h2>
      <p class="mb-4">This section will feature articles that bridge the gap between Laravel backends and Vue.js frontends. Stay tuned for comprehensive guides on integrating these powerful technologies to build modern, full-stack web applications.</p>
    </div>

    <div class="mb-12">
      <h2 class="text-2xl font-semibold text-primary-500 mb-6">Latest Articles</h2>

      <!-- Grid layout for cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-if="latestPosts.length > 0" v-for="post in latestPosts" :key="post.path">
          <PostPreview :post="post" color-scheme="primary" />
        </div>
        <div v-if="latestPosts.length === 0" class="col-span-2 text-center py-8">
          <p class="text-gray-500 italic">No articles yet. Check back soon!</p>
        </div>
      </div>
    </div>

    <!-- All Articles section (only show if there are articles) -->
    <div v-if="allPosts.length > 0" class="mb-12">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-semibold text-primary-500">All Articles</h2>

        <div class="flex items-center gap-2">
          <span class="text-sm text-gray-500">{{ allPosts.length }} {{ allPosts.length === 1 ? 'article' : 'articles' }}</span>
        </div>
      </div>

      <!-- List layout for all articles -->
      <div class="space-y-6">
        <div v-for="post in allPosts" :key="post.path"
             class="bg-white p-4 rounded-lg shadow border border-gray-100 hover:border-primary-200 transition-colors">
          <NuxtLink :to="post.path" class="group block">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-semibold text-primary-600 group-hover:text-primary-500 transition-colors">{{ post.title }}</h3>
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
                    class="text-xs font-medium px-2 py-1 rounded-md bg-primary-50 text-primary-600">
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
import { getLatestPosts, fullstackPosts } from '~/data/posts'

// Get the latest 2 Fullstack posts for the featured section
const latestPosts = getLatestPosts(2, 'fullstack')

// Get all Fullstack posts for the complete listing
const allPosts = fullstackPosts
</script>
