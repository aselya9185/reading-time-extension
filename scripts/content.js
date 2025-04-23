console.log("✅ Content script loaded on", window.location.href);

// Common selectors used by various sites for article content
const articleSelectors = [
    "article",
    "#mw-content-text",         // Wikipedia
    ".article-content",         // Common on blogs/news
    ".post-content",
    ".entry-content",
    "#content",                 // Generic fallback
    "main"
];

// Try to find the first matching element
let article = null;
for (const selector of articleSelectors) {
    article = document.querySelector(selector);
    if (article && article.textContent.trim().length > 200) break; // Basic check for real content
}

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g; // Regular expression
    const words = text.matchAll(wordMatchRegExp);
//    console.log(words); // Iterator, not a normal array

    // matchAll returns an iterator, convert to array to get word count
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 200); // Assuming the average reading speed is 200 words per minute.
    const badge = document.createElement("p");
    // Use the same styling as the publish information in an article's header
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} min read`;

      // Try to insert badge at the top of the content
    article.prepend(badge);
} else {
    console.warn("❌ No suitable article container found.");
}