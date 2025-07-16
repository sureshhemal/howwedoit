export interface Post {
  title: string;
  path: string;
  date: string;
  description: string;
  image?: string | null;
  readTime?: number;
  tags?: string[];
  author?: string;
  githubPR?: string; // Link to the GitHub PR for the post example code
}
