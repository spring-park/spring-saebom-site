# Saebom Park — personal site

A minimal, static site: plain HTML and CSS, one shared stylesheet, no framework and no build step.

## Pages

- `index.html` — home page (short intro + links to your CV and blog)
- `cv.html` — CV: education, activities, and awards
- `blog.html` — blog index, listing every post in `posts/`
- `posts/` — one HTML file per post, plus `post-template.html` to copy for new ones
- `posts-data.js` — the list of posts that `blog.html` reads to build its index
- `style.css` — every color, font, and layout rule for the whole site, in one file

## Publish it on GitHub Pages

1. Create a new repository on GitHub (for example `saebom-site`, or `<your-username>.github.io` if you want it at the root of your GitHub domain).
2. Add all the files in this folder (keeping `posts/` as a subfolder) and push them to the `main` branch.
3. In the repository, go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**, pick **main** and the **/ (root)** folder, then save.
5. GitHub publishes the site within a minute or two, at:
   - `https://<your-username>.github.io/<repo-name>/` for a regular repo, or
   - `https://<your-username>.github.io/` if the repo is named `<your-username>.github.io`.

You can also just open `index.html` directly in a browser to preview locally — everything here is plain files, no server required.

## Writing a new blog post

No CMS, no upload form — "publishing" a post means adding two things to the repo:

1. Duplicate `posts/post-template.html`, rename the copy to something like `posts/my-post-title.html`, and write the post inside the `<div class="post-content">` block. Update the title (in two places — the browser tab title and the on-page heading) and the date/tag near the top.
2. Open `posts-data.js` and add one entry to the `POSTS` array:
   ```js
   {
     slug: "my-post-title",       // matches the filename, without .html
     title: "My Post Title",
     date: "2026-09-15",          // YYYY-MM-DD
     excerpt: "One or two sentences shown on the blog index.",
     tag: "Data",                 // optional — omit or leave "" to skip it
   },
   ```

That's it — `blog.html` sorts posts by date automatically and builds the index for you. Commit and push both files, and the new post is live.

A placeholder first post, `posts/hello-world.html`, is already wired up as a working example — read it, edit it, or delete it once you have real content to replace it with.

## Before you publish

- Swap the placeholder `href="#"` on every **LinkedIn** link (in `index.html` and `cv.html`) for your real profile URL.
- Update the "Last updated" line in each page's footer whenever you revise the content.

## Customizing

Every color, font, and spacing value lives at the top of `style.css`, inside the `:root { ... }` block, so you can retheme the whole site by editing values in one place. The site already supports light and dark mode automatically, based on the visitor's system setting, and the CV page has print styles built in for a clean PDF export.
