/**
 * Blog post index.
 *
 * To add a new post:
 *   1. Duplicate posts/post-template.html, save it as posts/your-slug.html,
 *      and write your post inside the <div class="post-content"> block.
 *   2. Add one entry below — `slug` must match the filename you just saved
 *      (without ".html"). Newest-first ordering is automatic; sort by date
 *      is handled in blog.html, so entries can be listed in any order here.
 *
 * Fields:
 *   slug    — filename of the post inside posts/, without ".html"
 *   title   — post title, shown on the blog index and the post page
 *   date    — "YYYY-MM-DD", used for sorting and display
 *   excerpt — one or two sentences shown on the blog index
 *   tag     — a single short category label (optional — omit or leave "")
 */
window.POSTS = [
  {
    slug: "hello-world",
    title: "Hello, and welcome",
    date: "2026-08-28",
    excerpt:
      "Why I'm starting this blog, what I plan to write about, and how this whole site is put together.",
    tag: "Meta",
  },
];
