import type { Post } from '~/types'

// kepp in mind to add latest post at the top of the list
export const laravelPosts: Post[] = [
  {
    title: 'Laravel Macros for Cleaner Reusability: Adding equals to Collections',
    path: '/laravel/laravel-macros-for-cleaner-reusability',
    date: 'June 10, 2024',
    description: 'Learn how to add an \'equals\' macro to Laravel Collections for cleaner, reusable code. This post demonstrates how to use macros to extend Laravel\'s core classes, using Collection as a practical example.',
    image: 'images/laravel-collection-macros.png',
    readTime: 7,
    tags: ['Macros', 'Collections', 'Laravel'],
    githubPR: 'https://github.com/sureshhemal/howwedoit-examples/pull/3',
  },
  {
    title: 'Binding Dependencies with Custom Parameters',
    path: '/laravel/binding-dependencies-with-custom-parameters',
    date: 'July 17, 2025',
    description: 'Laravel\'s IoC container is a powerful tool for managing class dependencies. In this guide, we\'ll explore how to bind a service to the container while providing custom parameters at registration time.',
    image: 'images/laravel-ioc-container.png',
    readTime: 8,
    tags: ['Service Container', 'Dependency Injection'],
    githubPR: 'https://github.com/sureshhemal/howwedoit-examples/pull/1',
  },
]
