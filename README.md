# D Perry Music — website

The official site for **dperrymusic.com**, a static single-page site hosted on
GitHub Pages.

## Editing the site

Everything lives in three files — no build step, no framework:

| File         | What it controls                                  |
|--------------|---------------------------------------------------|
| `index.html` | Page content: hero text, music embeds, bio, links |
| `styles.css` | Colors, fonts, layout (edit the `:root` variables at the top to recolor) |
| `script.js`  | Small touches (auto year, nav-on-scroll)          |

### Add a song / album

1. Open the release in Spotify (or Apple Music, SoundCloud, YouTube, Bandcamp).
2. **Share → Embed** and copy the `<iframe>` code.
3. In `index.html`, find the `<!-- HOW TO ADD YOUR MUSIC -->` block and paste it
   in place of a placeholder `.embed`.

### Update the bio / photo

- Edit the text in the **About** section of `index.html`.
- Drop a photo into `assets/` and point the About image at it.

### Update social links

- In the footer of `index.html`, replace the `href="#"` placeholders with your
  real profile URLs.

## Publishing changes

This site auto-deploys: any push to the `main` branch updates
https://dperrymusic.com within a minute or two.

```bash
git add .
git commit -m "Update site"
git push
```

> The `CNAME` file tells GitHub Pages to serve the site at `dperrymusic.com`.
> Don't delete it.
