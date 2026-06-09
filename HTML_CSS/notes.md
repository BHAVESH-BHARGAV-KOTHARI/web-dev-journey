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

Website name is **"The Thousand Sunny"**.

---

## DAY 2

### Hyperlinks

A hyperlink is a digital reference to another resource that a user can access by clicking on highlighted text.

Hyperlinks are created using the `<a></a>` (**anchor**) tag.

To create a hyperlink:

- Place the clickable text between the opening and closing anchor tags.
- Add the `href=""` (**Hypertext Reference**) attribute inside the opening `<a>` tag.
- If the target file is in the same directory, simply use the file name.
- If the target file is in a different directory, provide the relative path to that file.
- If the target is a website, place the URL inside `href=""`.

Example:

```html
<a href="index.html">Check My Website</a>
```

This will open `index.html` when clicked.

External Website Example:

```html
<a href="https://www.google.com">Visit Google</a>
```

This will take the user to Google's website.

#### Useful Attributes

**1. `target="_blank"`**

- Opens the linked page in a new browser tab.

```html
<a href="https://www.google.com" target="_blank">
    Visit Google
</a>
```

**2. `title=""`**

- Displays a tooltip when the user hovers over the hyperlink.

```html
<a href="https://www.google.com" title="Opens Google's Homepage">
    Visit Google
</a>
```

#### Email Links (`mailto:`)

The `mailto:` protocol can be used to open the user's default email application and compose an email.

```html
<a href="mailto:example@gmail.com">
    Send Email
</a>
```

When clicked, the user's email client opens with the recipient's email address already filled in.

#### Note

- You can wrap up an anchor with a header or paragraph tags too.

- Prefer **relative paths** (`index.html`, `pages/crew.html`) over absolute paths (`file:///C:/...`) when building websites.
- `file:///...` links work only on your local machine and cannot be used to share websites with others.
- To share a website publicly, host it online (e.g., GitHub Pages) and use its URL.

### Project Time 🚀

So, now that I have learned about hyperlinks, I will try to connect the pages within my website and turn **The Thousand Sunny** into a proper multi-page website.

Current pages:

- The Crew Deck
- Music Room
- Quiz Arena
- Fan Mail Office