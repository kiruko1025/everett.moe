# everett.moe

built with [Hugo](https://gohugo.io/) and the [Doks theme](https://getdoks.org/).

Install Node.js 24 (24.13.0 or newer), npm, and [Hugo extended 0.166.0](https://github.com/gohugoio/hugo/releases/tag/v0.166.0). Then run:

```sh
npm ci
npm run dev
```

Open the local URL printed by Hugo. To generate the production site in `public/`:

```sh
npm run build
```

Edit the written content in `content/`. Site settings and navigation are in `config/_default/`. 

GitHub Actions validates pull requests and builds and deploys pushes to `main` to GitHub Pages. It uses the site's configured Pages URL when building. The workflow can also be run manually from the Actions tab. The repository's **Settings → Pages → Source** must be set to **GitHub Actions**; see [Hugo's Pages deployment guide](https://gohugo.io/host-and-deploy/host-on-github-pages/).

Generated files in `public/`, Hugo's resource cache, and `node_modules/` are excluded from Git.
