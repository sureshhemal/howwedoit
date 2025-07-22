<template>
  <BlogLayout>
    <CategoryIndexLayout
      title="Fullstack Techniques"
      subtitle="Best practices and patterns for building robust fullstack applications."
      overviewTitle="Category Overview"
      overviewText="This section covers fullstack development topics, including API design, authentication, and integration between frontend and backend frameworks."
      :latestPosts="latestPosts"
      :allPosts="allPosts"
      colorScheme="primary"
    />
  </BlogLayout>
</template>

<script setup lang="ts">
import BlogLayout from '~/layouts/BlogLayout.vue'
import CategoryIndexLayout from '~/components/CategoryIndexLayout.vue'
import { getLatestPosts, fullstackPosts } from '~/data/posts'

const latestPosts = getLatestPosts(2, 'fullstack')
const allPosts = fullstackPosts
</script>
