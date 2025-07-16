<template>
  <div v-if="previewPost">
    <BlogPost
      :topic="postMetadata.title"
      :date="postMetadata.date"
      :summary="postMetadata.description"
      :reading-time="postMetadata.readTime || 8"
      :color-scheme="categoryColor"
      :next-post="nextPost"
      :previous-post="previousPost"
      :github-p-r="postMetadata.githubPR"
    >
      <!-- Render the markdown content -->
      <ContentRenderer v-if="postMetadata" :value="previewPost" />
    </BlogPost>
  </div>
  <div v-else class="py-12 text-center">
    <p class="text-gray-600">Content for this post is still being prepared. Check back soon!</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useAsyncData, queryContent, useHead } from '#imports'
import { findPostByPath, queryNextPost, queryPreviousPost } from '~/data/posts'
import { computed } from 'vue'

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
})

const categoryColor = computed(() => {
  const colorMap: Record<string, string> = {
    'laravel': 'primary',
    'vue': 'accent',
    'fullstack': 'primary',
  }

  return colorMap[props.category] || 'primary'
})

// Get the current route
const route = useRoute()

// Find the raw post based on the current route path
const postMetadata = findPostByPath(route.path)

const nextPost = computed(() => queryNextPost(postMetadata))
const previousPost = computed(() => queryPreviousPost(postMetadata))

// Fetch the markdown content directly from the content directory using the route path
const { data: previewPost } = await useAsyncData(`content-${postMetadata.path}`, () =>
  queryContent(postMetadata.path).findOne(),
)

// Set the page title based on the post or slug
useHead({
  title: postMetadata.title,
  meta: [
    {
      name: 'description',
      content: postMetadata.description,
    },
  ],
})
</script>
