# cc-material-helpers

Based on Material 3 (Material Web Components) v2.5.0
https://github.com/material/material-web/tree/v2.5.0

The Material 3 library is bundled locally in this repository (not loaded from a CDN):

* `material-web.js` / `material-web.min.js` – bundle of `@material/web` v2.5.0 (`all.js` plus the typescale styles), registering all `md-*` custom elements.
* `material-web.css` – Material 3 design tokens (baseline light color scheme) and Material 3 styles for the helper components without an `@material/web` equivalent (list, navigation drawer, top app bar).

Include both before the component scripts:

```html
<link rel="stylesheet" href="material-web.css">
<script src="material-web.min.js"></script>
```

To regenerate the bundle:

```sh
npm install @material/web@2.5.0 esbuild
# entry.js:
#   import '@material/web/all.js';
#   import {styles as typescaleStyles} from '@material/web/typography/md-typescale-styles.js';
#   document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
npx esbuild entry.js --bundle --format=iife --outfile=material-web.js --legal-comments=none
npx esbuild entry.js --bundle --format=iife --minify --outfile=material-web.min.js --legal-comments=none
```
