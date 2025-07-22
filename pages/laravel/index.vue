<template>
  <BlogLayout>
    <CategoryIndexLayout
      title="Laravel Techniques"
      subtitle="Dive into advanced Laravel patterns, elegant solutions, and performance optimization."
      overviewTitle="Category Overview"
      overviewText="This section will feature in-depth articles about Laravel development. Stay tuned for comprehensive guides on various aspects of the Laravel framework, from foundational concepts to advanced techniques."
      :latestPosts="latestPosts"
      :allPosts="allPosts"
      colorScheme="primary"
    />
  </BlogLayout>
</template>

<script setup lang="ts">
import BlogLayout from '~/layouts/BlogLayout.vue'
import CategoryIndexLayout from '~/components/CategoryIndexLayout.vue'
import { getLatestPosts, laravelPosts } from '~/data/posts'

const latestPosts = getLatestPosts(2, 'laravel')
const allPosts = laravelPosts
</script>
