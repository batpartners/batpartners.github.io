# GERTY Docs (Astro Starlight)

The renewed GERTY documentation, published by GitHub Pages at **https://docs.b-at.kr** (Korean at `/`, English at
`/en/`). It lives in the `batpartners/batpartners.github.io` repo as the folder `gerty-docs/` and is built from the
same Jekyll posts as before: edit `_posts/*.md` / `en/_posts/*.md` (and `_data/navigation.yml` for the sidebar), push
to `main`, and the workflow `.github/workflows/docs.yml` converts, builds, checks and publishes the site.

## Commands (in this folder)

```bash
npm install          # once
npm run convert      # rebuild src/content/docs from the posts (the repo this folder is in; or set DOCS_SRC)
npm run dev          # live preview at http://localhost:4321
npm run build        # static site in dist/
node scripts/check.mjs   # after a build: text parity with the posts + every internal link/image/redirect
```

## How it is put together

| Path | What it is |
| --- | --- |
| `scripts/convert.mjs` | Converts the Jekyll posts to MDX. Re-runnable: run it again whenever the posts change. |
| `scripts/slug.mjs` | New page URL from the post file name (`2026-07-11-Instruction-Move.md` → `/instruction/move/`). |
| `scripts/posts.mjs` | Reads the posts and fixes known source problems (English SurfaceShell pair, English WobjData Fixed/Movable copies, English WaitDI title, Korean Tree Branch table row, Korean TriggIOs link typo). Used by convert and check. Still open in the source: the English IODEvent page shows SeamData content (needs an English translation). |
| `scripts/check.mjs` | Post-build checks; the GitHub workflow stops before publishing if it finds a problem. |
| `src/content/docs/` | Generated pages (not committed; convert writes them before every build). |
| `src/sidebar.generated.json` | Generated from `_data/navigation.yml`. |
| `redirects.generated.json` | Every old URL → new URL. Each old URL also gets a small redirect page in `public/`. |
| `public/assets/` | Committed. Only the images/videos the pages use. Big GIF/MP4 files are re-encoded to small MP4s (ffmpeg from the `ffmpeg-static` package); external images (postimg, the old WordPress) were downloaded here once. |
| `assets-manifest.json` | Committed. Which source each file in `public/assets` was made from, so a build on GitHub only converts what changed. |
| `src/styles/theme.css` | Brand theme (Pretendard, navy, #00548D), light and dark. |
| `astro.config.mjs` | Site config: logo, languages, sidebar, header links. |
| `.github/workflows/docs.yml` | The publish workflow. In the repo it lives at the root: `.github/workflows/docs.yml`. |

When new images or videos are added to the posts, running `npm run convert` locally and committing `public/assets` and
`assets-manifest.json` keeps the GitHub build fast (otherwise it converts them on every build).

## Old addresses

With the custom domain set, GitHub forwards every `batpartners.github.io/...` address to `docs.b-at.kr/...`, where the
redirect pages send it to the new page — including the URL the GERTY plugin opens (`/about%20gerty/About-GERTY/`).

The homepage's "도큐먼트 / Docs" links point to `https://docs.b-at.kr/` (and `/en/`); this site's links to the homepage use
`HOMEPAGE` from `src/homepage.mjs` (`https://www.b-at.kr`, the homepage's main address while b-at.kr's DNS stays at Cafe24).
Step-by-step go-live (homepage on Cloudflare, docs on GitHub, Cafe24 DNS, mail): `D:/ClaudeWebsite/SHLDemo/DEPLOY.md`.
