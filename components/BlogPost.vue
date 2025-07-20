<template>
  <div class="max-w-4xl mx-auto py-12">
    <!-- Back buttons removed as they're now handled by BlogLayout -->

    <article class="prose prose-lg max-w-none">
      <!-- Article header -->
      <header class="mb-8 pb-8 border-b border-gray-100">
        <!-- Featured Image and Topic Side by Side -->
        <div v-if="featuredImage" class="flex items-center mb-6 gap-6">
          <img
            :src="featuredImage"
            :alt="topic"
            class="w-40 h-40 object-contain rounded-lg bg-white flex-shrink-0"
          >
          <h1 class="text-3xl font-bold text-primary-700">
            {{ topic }}
          </h1>
        </div>
        <!-- If no image, just show the topic -->
        <div v-else class="mb-6">
          <h1 class="text-3xl font-bold text-primary-700">
            {{ topic }}
          </h1>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-4">
          <!-- Date and reading time -->
          <div class="flex items-center gap-6">
            <div class="flex items-center text-gray-500">
              <svg
                  xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span>{{ date }}</span>
            </div>

            <div class="flex items-center text-gray-500">
              <svg
                  xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>{{ readingTime }} min read</span>
            </div>
          </div>

          <!-- GitHub PR and Share buttons -->
          <div class="flex items-center gap-2">
            <!-- GitHub PR Link if available -->
            <a
                v-if="githubPR"
                :href="githubPR"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                :title="`View code examples on GitHub PR #${getPrNumber(githubPR)}`">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            <!-- Copy link button -->
            <button
                class="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                title="Copy link to clipboard" @click="copyLink">
              <svg
                  xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <!-- Summary box -->
      <div :class="`bg-${colorScheme}-50 border-${colorScheme}-500 p-5 mb-8 rounded-md`">
        <p :class="`text-${colorScheme}-700 font-medium leading-relaxed`">{{ summary }}</p>
      </div>

      <!-- GitHub PR Link Box - Adjusted font sizes -->
      <div v-if="githubPR" class="flex items-center bg-gray-50 border border-gray-200 p-3 rounded-md mb-6 hover:bg-gray-100 transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        <span class="text-sm text-gray-700 flex-1">View code examples in <span class="text-gray-900 font-medium">Pull Request #{{ getPrNumber(githubPR) }}</span></span>
        <a
          :href="githubPR"
          target="_blank"
          rel="noopener noreferrer"
          :class="`flex items-center px-3 py-1.5 rounded-md border border-${colorScheme}-600 bg-${colorScheme}-50 text-${colorScheme}-700 text-sm font-semibold hover:bg-${colorScheme}-100 transition-colors`"
        >
          View Code
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      <!-- Article content -->
      <div ref="contentRef" class="content">
        <slot/>
      </div>
    </article>

    <!-- Next & Previous article navigation -->
    <div
        v-if="previousPost || nextPost"
        class="mt-12 pt-8 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-200">
      <div v-if="previousPost" class="group">
        <NuxtLink :to="previousPost.path" class="flex flex-col p-4 rounded-md hover:bg-gray-50 transition-colors">
          <span class="text-gray-500 mb-1">← Previous Article</span>
          <span :class="`font-medium group-hover:text-${colorScheme}-600 transition-colors`">{{
              previousPost.title
            }}</span>
        </NuxtLink>
      </div>
      <div v-if="nextPost" class="group text-right md:ml-auto">
        <NuxtLink :to="nextPost.path" class="flex flex-col p-4 rounded-md hover:bg-gray-50 transition-colors">
          <span class="text-gray-500 mb-1">Next Article →</span>
          <span :class="`font-medium group-hover:text-${colorScheme}-600 transition-colors`">{{ nextPost.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '~/types'
import { computed } from 'vue'

const props = defineProps({
  topic: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  featuredImage: {
    type: String,
    default: '',
  },
  colorScheme: {
    type: String,
    default: 'primary',
  },
  readingTime: {
    type: Number,
    default: 5,
  },
  showTableOfContents: {
    type: Boolean,
    default: true,
  },
  githubPR: {
    type: String,
    default: '',
  },
  previousPost: {
    type: Object as () => Post | null,
    default: null,
  },
  nextPost: {
    type: Object as () => Post | null,
    default: null,
  },
})

// Copy link to clipboard functionality
function copyLink() {
  navigator.clipboard.writeText(window.location.href)
    .then(() => {
      alert('Link copied to clipboard!')
    })
    .catch(err => {
      console.error('Could not copy link: ', err)
    })
}

// Function to extract PR number from GitHub PR URL
const getPrNumber = (url: string): string => {
  if (!url) return ''
  const parts = url.split('/')
  return parts[parts.length - 1]
}

const titleStyles = computed(() => {
  return `text-${props.colorScheme}-600 hover:text-${props.colorScheme}-500`
})
</script>