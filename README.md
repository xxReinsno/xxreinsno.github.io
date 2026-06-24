# Xue Yuquan — Personal Academic Homepage

Source for [xxreinsno.github.io](https://xxreinsno.github.io/).

The site is deliberately built as lightweight static HTML. It has no build step, package manager, runtime Markdown parser, external font, or third-party rendering dependency.

## Edit the site

- Update biography, publications, awards, metadata, and links directly in `index.html`.
- Update presentation in `static/css/main.css`.
- Update the accessible mobile navigation in `static/js/scripts.js`.
- Keep the optimized WebP images referenced by the page. The PNG files are retained as source and browser fallbacks.

## Preview locally

From the repository root, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

Push changes to the `main` branch. GitHub Pages serves the repository as a static site.

## License

See [LICENSE](LICENSE).
