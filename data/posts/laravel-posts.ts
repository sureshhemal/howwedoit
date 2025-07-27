import type { Post } from '~/types'

// keep in mind to add the latest post at the top of the list
export const laravelPosts: Post[] = [
  {
    title: 'Searching Across Combined Columns in Laravel: Getting Accurate Results',
    path: '/laravel/multi-column-search',
    date: 'July 27, 2025',
    description: 'Learn how to search effectively by combining first and last name columns in Laravel, along with company names, for accurate results.',
    image: 'images/multi-column-search-in-laravel.png',
    readTime: 8,
    tags: ['Search', 'Eloquent', 'Laravel', 'Combined Columns'],
    githubPR: 'https://github.com/sureshhemal/howwedoit-examples/pull/6/files',
  },
  {
    title: 'Laravel Macros for Cleaner Reusability: Adding equals to Collections',
    path: '/laravel/laravel-macros-for-cleaner-reusability',
    date: 'July 19, 2025',
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
