<template>
  <div>
    <!-- Page Header -->
    <div class="text-center mb-8">
      <h1 :class="`text-4xl font-bold text-${colorScheme}-600 mb-4`">{{ title }}</h1>
      <p class="text-lg text-gray-600">{{ subtitle }}</p>
    </div>

    <!-- Category Overview -->
    <div :class="`bg-${colorScheme}-50 p-6 rounded-lg border border-${colorScheme}-100 mb-12`">
      <h2 :class="`text-xl font-semibold text-${colorScheme}-600 mb-3`">{{ overviewTitle }}</h2>
      <p class="mb-4">{{ overviewText }}</p>
    </div>

    <!-- Latest Articles -->
    <div class="mb-12">
      <h2 :class="`text-2xl font-semibold text-${colorScheme}-500 mb-6`">Latest Articles</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="post in latestPosts" :key="post.path">
          <PostPreview :post="post" :color-scheme="colorScheme" />
        </div>
      </div>
    </div>

    <!-- All Articles -->
    <div class="mb-12">
      <div class="flex items-center justify-between mb-6">
        <h2 :class="`text-2xl font-semibold text-${colorScheme}-500`">All Articles</h2>
        <div class="flex items-center gap-2">
          <span class="text-sm text-gray-500">{{ allPosts.length }} {{ allPosts.length === 1 ? 'article' : 'articles' }}</span>
        </div>
      </div>
      <ArticleList :posts="allPosts" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PostPreview from '~/components/PostPreview.vue'
import ArticleList from '~/components/ArticleList.vue'

defineProps<{
  title: string
  subtitle: string
  overviewTitle: string
  overviewText: string
  latestPosts: Array<any>
  allPosts: Array<any>
  colorScheme?: string
}>()
</script> 