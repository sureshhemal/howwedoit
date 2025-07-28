import type { Post } from '~/types'

export const vuePosts: Post[] = [
  {
    title: 'Attaching Nuxt Project to Local .test Domain',
    path: '/vue/attaching-nuxt-to-local-test-domain',
    date: 'July 28, 2025',
    description: 'Step-by-step guide to configure your Nuxt project to run on a custom local domain using Vite and Nuxt config.',
    image: 'images/custom-domain-nuxt-app.png',
    readTime: 8,
    tags: ['Nuxt', 'Vite', 'Local Development', 'Custom Domain'],
    githubPR: 'https://github.com/sureshhemal/howwedoit/pull/5/files',
  },
  {
    title: 'Vue 3 Options API vs Composition API vs Composables — A Practical Comparison',
    path: '/vue/vue-3-apis-compared-choose-your-style',
    date: 'July 22, 2025',
    description: 'A comparison of Vue 3 APIs to help you choose your preferred development style.',
    image: 'images/vue3-api-comparison.png',
    readTime: 10,
    tags: ['Vue', 'Composition API', 'Options API', 'Composable'],
    githubPR: 'https://github.com/sureshhemal/howwedoit-examples/pull/5/files',
  },
]
