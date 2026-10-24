# Aml Hassan Esmail Portfolio

This repository powers the GitHub Pages site:

- **Production URL:** https://aml-hassan-abd-el-hamid.github.io/Aml.github.io/

## Main files to maintain

The portfolio is now data-driven for easy updates:

- `assets/js/portfolio-data.js` -> **single source of truth** for:
  - profile/contact info
  - availability status
  - skills
  - experience
  - featured projects
  - publications
  - education
  - certificates
  - articles
- `index.html` -> homepage layout
- `projects.html` -> project listings page
- `blogs.html` -> article listings page
- `assets/css/portfolio-modern.css` -> modern styling
- `assets/js/portfolio-site.js` -> UI rendering + navigation behavior

## How to update content quickly

### Add a new article
1. Open `assets/js/portfolio-data.js`
2. Add a new object to the `articles` array:
   - `title`
   - `url`
   - `publication`
   - `description`
3. Commit and push -> GitHub Pages redeploys automatically.

### Create a new local article page
1. Copy one of the files in `articles/` as a template.
2. Keep the same Medium-style structure (`article-shell` -> `article-inner` -> `article-body`) and update title/content/metadata.
3. Add/update the matching entry in `assets/js/portfolio-data.js` so it appears on `blogs.html`.

### Update experience
1. Open `assets/js/portfolio-data.js`
2. Edit the `experience` array entries (`role`, `company`, `period`, `location`, `bullets`).
3. Commit and push.

### Update opportunities status
1. Open `assets/js/portfolio-data.js`
2. Edit the `availability.title` and `availability.description` fields.
3. Commit and push.

### Add or remove hero photo (optional)
1. The homepage is currently text-first (no profile image block).
2. If you want a hero photo again, add a `hero-visual` block back inside the hero section in `index.html` and point it to your preferred image in `assets/img/`.
3. Commit and push.

## Performance notes

- The main pages use lightweight custom JS/CSS with deferred scripts.
- Unused heavy template libraries are not loaded on the main portfolio pages.
- Content rendering happens from a single local data file for simpler maintenance.
