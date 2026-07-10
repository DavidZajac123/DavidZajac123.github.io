# Personal Portfolio

Single-page portfolio site — plain HTML/CSS/JS, no build step.

## Files

- `index.html` — page structure (rarely needs editing)
- `styles.css` — visual design; CSS variables at the top control colors/spacing
- `data.js` — **all site content lives here** (bio, projects, education, etc.)
- `app.js` — renders `data.js` into the page (rarely needs editing)
- `IMG_0909.jpg` — profile photo

## How to update content

Open `data.js` and edit the field you want to change. To add a project, copy an existing block in the `projects` array and edit it.

## How to run locally

Just open `index.html` in a browser, or serve the folder:

```powershell
python -m http.server 8000
```

Then visit http://localhost:8000

## How to deploy

Any static host works — GitHub Pages, Netlify, Vercel, Cloudflare Pages. Just upload the folder.
