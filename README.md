# everett.moe

Everett’s personal website, using the new ivory-and-purple sidebar design. Each section is a separate page. The site is plain HTML, CSS, and JavaScript with self-hosted fonts and no package dependencies.

## Run locally

Use Node.js 22 or later:

```sh
npm run dev
```

Open `http://127.0.0.1:4173`. To prepare the deployable site in `public/`:

```sh
npm run build
```

## Edit the site

- `site/index.html`: About
- `site/education/index.html`: Education
- `site/elsewhere/index.html`: Blog and GitHub links
- `site/contact/index.html`: Contact
- `site/styles.css`: Shared appearance
- `site/script.js`: Mobile sidebar and copy-email behavior

Every page has the same sidebar. Keep its links consistent when editing navigation. The previous Hugo source remains in Git history; links to its Education and Contact pages redirect to their new locations.

## Publish

GitHub Actions builds and deploys changes to `main` to the existing GitHub Pages site at `https://everett.moe`. `site/CNAME` preserves the custom domain.

## Blog

The `blog/` folder is a separate checkout of `https://github.com/kiruko1025/blog.everett.moe`, configured for `https://blog.everett.moe`. It has its own Git history and publishing setup; its README describes adding and editing posts. The folder is ignored by this repository so the two sites deploy independently.

The `sites/` folder holds the earlier Sites preview checkout and is also ignored. The main website’s maintained source is now `site/`.
