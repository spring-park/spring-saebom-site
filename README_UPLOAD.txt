UPLOAD GUIDE — spring-park/spring-saebom-site
=============================================
The blog uses standalone HTML posts, not Jekyll Markdown.

Copy these paths into the same paths in the GitHub repository, retaining folders:
  posts/building-global-corn-rice-trade-networks.html
  posts/global-corn-rice-trade-networks-results.html
  assets/fao-trade-network/ (all files in this directory)
  posts-data.js (replace the root file with the included updated file)

Do not upload the outer FAO_trade_blog_upload folder as a new directory.
Open repository -> Add file -> Upload files, choose files or folders as appropriate.
The two new posts both use the date 2026-11-01. Existing posts were retained in posts-data.js.

Publication URLs after GitHub Pages rebuild:
https://spring-park.github.io/spring-saebom-site/posts/building-global-corn-rice-trade-networks.html
https://spring-park.github.io/spring-saebom-site/posts/global-corn-rice-trade-networks-results.html

Interactive maps use Plotly from the public CDN, so an internet connection is needed to render them.
Static PNG map previews are included and do not require external scripts.

The live GitHub connector currently lacks push permission to spring-park/spring-saebom-site.
