<template>
  <BlogLayout>
    <CategoryIndexLayout
      title="Vue Techniques"
      subtitle="Explore Vue.js best practices, patterns, and advanced component design."
      overviewTitle="Category Overview"
      overviewText="This section features in-depth articles about Vue.js development. Find guides on everything from the basics to advanced Vue 3 features and ecosystem tools."
      :latestPosts="latestPosts"
      :allPosts="allPosts"
      colorScheme="primary"
    />
  </BlogLayout>
</template>

<script setup lang="ts">
import BlogLayout from '~/layouts/BlogLayout.vue'
import CategoryIndexLayout from '~/components/CategoryIndexLayout.vue'
import { getLatestPosts, vuePosts } from '~/data/posts'

const latestPosts = getLatestPosts(2, 'vue')
const allPosts = vuePosts
</script>
