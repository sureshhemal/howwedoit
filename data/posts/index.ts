import { laravelPosts } from './laravel-posts'
import { vuePosts } from './vue-posts'
import { fullstackPosts } from './fullstack-posts'
import type { Post } from '~/types'

// Export individual category posts
export { laravelPosts, vuePosts, fullstackPosts }

// Export combined posts for use in search or featured sections
export const allPosts: Post[] = [
  ...laravelPosts,
  ...vuePosts,
  ...fullstackPosts,
]

// Categories mapping for easier access
export const postCategories = {
  laravel: laravelPosts,
  vue: vuePosts,
  fullstack: fullstackPosts,
}

// Utility function to get latest posts, optionally filtered by category
export function getLatestPosts(limit = 6, category: 'laravel' | 'vue' | 'fullstack'): Post[] {
  // Start with all posts or filter by category if specified
  const postsToSort = postCategories[category]

  return [...postsToSort]
    .slice(0, limit)
}

// Utility function to get posts by tag
export function getPostsByTag(tag: string, category?: 'laravel' | 'vue' | 'fullstack'): Post[] {
  // Start with all posts or filter by category if specified
  const postsToFilter = category
    ? postCategories[category]
    : allPosts

  return postsToFilter.filter(post => post.tags && post.tags.includes(tag))
}

export function findPostByPath(path: string): Post {
  return <Post> allPosts.find(post => post.path === path)
}

export function queryNextPost(post: Post): Post | null {
  const index = allPosts.findIndex(p => p.path === post.path)
  return index >= 0 && index < allPosts.length - 1 ? allPosts[index + 1] : null
}

export function queryPreviousPost(post: Post): Post | null {
  const index = allPosts.findIndex(p => p.path === post.path)
  return index > 0 ? allPosts[index - 1] : null
}
