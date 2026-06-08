# NOTES

This file will contain a quick revision notes for HTML & CSS (Daywise).
index.html and style.css are just sandbox files, where I will be testing out the things I have learnt that Day.

For the HTML part, I have decided to build a website, adding the features I learn, one at a time.
After every feature I add, I'll update the notes and them commit.

## DAY 1

### Intro to HTML
Hyper Text Markup Language - adds structure to the webpage

To get started with the HTML code, we can just time '!' in vscode and then hit "TAB key", this will give us a boilerplate of HTML code.

#### Understanding the Boilerplate

1. **`<!DOCTYPE html>`**
   - Tells the browser that this is an HTML5 document.
   - Helps the browser render the page in standards mode (modern and consistent HTML/CSS behavior).
   - Without it, the browser may use Quirks Mode, which emulates older browser behavior for compatibility.

2. **`<html lang="en">`**
   - Root element of the entire webpage.
   - `lang="en"` specifies that the page content is in English.

3. **`<head>`**
   - Contains the metadata about the webpage.
   - Not directly visible on the webpage.

4. **`<meta charset="UTF-8">`**
   - Sets the character encoding to `UTF-8`.
   - Allows displaying most languages and special symbols correctly.

5. **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**
   - Makes the page responsive on mobile devices.
   - `width=device-width` → page width matches device width.
   - `initial-scale=1.0` → normal zoom level when loaded.

6. **`<title>`**
   - Text shown on the browser tab.
   - Also used by search engines.

7. **`<body>`**
   - Contains everything that is visible on the webpage.

#### Headers & Paragraphs

1. **Header Tags**
   - Header tags are used for titles and subtitles on a webpage.
   - HTML provides six levels of headings, from `<h1>` to `<h6>`.
   - `<h1>` represents the most important heading, while `<h6>` represents the least important.

   ```html
   <h1>Main Heading</h1>
   <h2>Sub Heading</h2>
   <h3>Section Heading</h3>
   <h4>Sub Section Heading</h4>
   <h5>Minor Heading</h5>
   <h6>Smallest Heading</h6>
   ```

2. **Paragraph Tags**
   - Paragraphs are created using the `<p>` tag.
   - Any text enclosed within `<p></p>` is treated as a paragraph by the browser.

   ```html
   <p>This is a paragraph.</p>
   ```

3. **Whitespace Handling**
   - Browsers render paragraph content as a single block of text.
   - Multiple spaces, tabs, and newlines inside a paragraph are ignored and collapsed into a single space.

   ```html
   <p>
       Hello


       World
   </p>
   ```

   Output:

   ```
   Hello World
   ```

4. **Line Breaks & Horizontal Rules**
   - `<br>` inserts a line break.
   - `<hr>` inserts a horizontal line, often used to visually separate sections.

   ```html
   First Line<br>
   Second Line

   <hr>
   ```

5. **Preformatted Text**
   - The `<pre>` tag preserves all spaces, tabs, and line breaks exactly as written.
   - Useful when displaying code snippets or formatted text.

   ```html
   <pre>
   Hello

       World
   </pre>
  ```

**Bonus**
- In VS Code, typing `lorem` and pressing `Tab` generates dummy placeholder text (Lorem Ipsum).
- Useful for quickly filling a webpage with sample content during development.

### Project Time 🚀

This concludes the introduction to HTML. Time to build something.
I have decided to create a **One Piece-themed webpage** and apply the concepts learned so far. Let's see how this turns out.

**Commit #1**
---
