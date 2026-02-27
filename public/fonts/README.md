# Local fonts – Glacial Indifference

**Belleza** (headings) is loaded via **next/font/google** in the app; no font files are needed in this folder for Belleza.

Only **Glacial Indifference** (body text) is loaded from this folder.

---

## Where to put the files

- **Path:** `public/fonts/`
- Place Glacial Indifference font files here. The app loads them from `/fonts/...`.

---

## Glacial Indifference (body text)

- **Expected file names** (already in use):
  - `GlacialIndifference-Regular.otf`
  - `GlacialIndifference-Bold.otf`

If your downloaded files have different names (e.g. with spaces or hyphens), rename them to match the names above, or ask to have the `@font-face` paths in `app/globals.css` updated to match your filenames.

---

## After adding the files

- Restart the dev server if it’s running.

---

## Example folder layout

```
public/
  fonts/
    README.md
    GlacialIndifference-Regular.otf
    GlacialIndifference-Bold.otf
```
