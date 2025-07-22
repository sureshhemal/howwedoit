import type { Post } from '~/types'

// keep in mind to add latest post at the top of the list
export const fullstackPosts: Post[] = [
  {
    title: 'Set up Laravel Sanctum API Authentication for Inertia.js Frontends',
    path: '/fullstack/set-up-laravel-sanctum-for-api-authentication',
    date: 'July 21, 2025',
    description: 'A step-by-step guide to implementing API authentication in a Laravel + Inertia.js app using Sanctum.',
    readTime: 8,
    tags: ['Laravel', 'Sanctum', 'API', 'Authentication', 'Fullstack'],
    githubPR: 'https://github.com/sureshhemal/howwedoit-examples/pull/4/files',
    image: 'images/sanctup-api-setup.png',
  },
]
