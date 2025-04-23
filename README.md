# Reading Time Badge Chrome Extension

This Chrome extension adds a simple reading time estimate (e.g., `⏱️ 3 min read`) to articles on any webpage you visit.

It scans the article content, calculates the word count, and inserts a badge right after the article title (or at the top if no title is found). Works on popular platforms like Wikipedia, blogs, news sites, and documentation pages.

---

## Features

- ⏱️ Estimates reading time (based on ~200 words per minute)
- 📰 Supports multiple article formats (e.g., `<article>`, `#mw-content-text`, `.entry-content`, `main`, etc.)
- 📌 Automatically inserts badge after title or at top of content
- 🌐 Runs on every webpage you visit

---

## How to Use

1. Clone the repo or [download the ZIP](https://github.com/YOUR_USERNAME/reading-time-badge-chrome-extension).
2. Go to `chrome://extensions/` in your browser.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the folder.
5. Visit any article — the reading time badge should appear!

---

## Files

- `manifest.json` – Extension metadata
- `content.js` – Script that calculates and injects the reading time
- `background.js` – Startup logging (optional)
- `icons/` – Extension icons

---

## Based On

Built following the [official Chrome extension tutorial](https://developer.chrome.com/docs/extensions/get-started/tutorial/scripts-on-every-tab) with extra logic to support more sites.

---
