# HTML NOTES

This file contains my HTML revision notes and project journey.

While learning HTML, I built a small One Piece-themed website called **The Thousand Sunny**, adding new features as I learned them. After completing each topic, I updated both the website and these notes before committing the changes to Git.

The notes are organized into two sections:

1. **Quick Reference** – A concise table containing commonly used HTML tags and attributes for fast revision.
2. **Detailed Notes** – Explanations, examples, observations, and project updates for each topic.

The goal of these notes is not only to document HTML concepts, but also to track my progress from writing a basic webpage to building a complete multi-page website.

---

## Quick Reference

# QUICK REVISION NOTES

## HTML Tag Reference

| Tag | Syntax | Description |
|------|----------|-------------|
| HTML Document | `<!DOCTYPE html>` | Declares the document as HTML5. |
| Root Element | `<html></html>` | Root element of the webpage. |
| Head | `<head></head>` | Contains metadata about the webpage. |
| Body | `<body></body>` | Contains all visible webpage content. |
| Title | `<title></title>` | Text displayed on the browser tab. |
| Header | `<header></header>` | Semantic container for introductory content. |
| Navigation | `<nav></nav>` | Semantic container for navigation links. |
| Main | `<main></main>` | Contains the primary content of the page. |
| Footer | `<footer></footer>` | Semantic container for concluding information. |
| Heading 1 | `<h1></h1>` | Highest level heading. |
| Heading 2 | `<h2></h2>` | Second level heading. |
| Heading 3 | `<h3></h3>` | Third level heading. |
| Heading 4 | `<h4></h4>` | Fourth level heading. |
| Heading 5 | `<h5></h5>` | Fifth level heading. |
| Heading 6 | `<h6></h6>` | Lowest level heading. |
| Paragraph | `<p></p>` | Defines a paragraph. |
| Line Break | `<br>` | Inserts a line break. |
| Horizontal Rule | `<hr>` | Creates a horizontal separator line. |
| Preformatted Text | `<pre></pre>` | Preserves spaces and line breaks exactly as written. |
| Hyperlink | `<a href=""></a>` | Creates a clickable hyperlink. |
| Image | `<img src="" alt="">` | Displays an image. |
| Audio | `<audio></audio>` | Embeds audio content. |
| Audio Source | `<source src="">` | Specifies an audio/video file source. |
| Video | `<video></video>` | Embeds video content. |
| Favicon | `<link rel="icon">` | Specifies the webpage favicon. |
| Bold Text | `<b></b>` | Displays bold text. |
| Italic Text | `<i></i>` | Displays italic text. |
| Underlined Text | `<u></u>` | Displays underlined text. |
| Deleted Text | `<del></del>` | Displays crossed-out text. |
| Small Text | `<small></small>` | Displays smaller text. |
| Big Text* | `<big></big>` | Displays larger text (*obsolete*). |
| Subscript | `<sub></sub>` | Displays subscript text. |
| Superscript | `<sup></sup>` | Displays superscript text. |
| Monospaced Text* | `<tt></tt>` | Displays monospaced text (*obsolete*). |
| Highlighted Text | `<mark></mark>` | Highlights text. |
| Span | `<span></span>` | Inline container for grouping/styling content. |
| Div | `<div></div>` | Block container for grouping larger sections. |
| Unordered List | `<ul></ul>` | Creates a bulleted list. |
| Ordered List | `<ol></ol>` | Creates a numbered list. |
| List Item | `<li></li>` | Represents an item within a list. |
| Description List | `<dl></dl>` | Creates a description list. |
| Description Term | `<dt></dt>` | Represents a term in a description list. |
| Description Details | `<dd></dd>` | Represents a description for a term. |
| Table | `<table></table>` | Creates a table. |
| Table Row | `<tr></tr>` | Represents a row in a table. |
| Table Header | `<th></th>` | Represents a header cell in a table. |
| Table Data | `<td></td>` | Represents a data cell in a table. |
| Button | `<button></button>` | Creates a clickable button. |
| Form | `<form></form>` | Creates a form for user input. |
| Label | `<label></label>` | Defines a label for a form element. |
| Input | `<input>` | Creates an input field. |
| Text Area | `<textarea></textarea>` | Multi-line text input field. |
| Select | `<select></select>` | Creates a dropdown menu. |
| Option | `<option></option>` | Represents an option within a dropdown. |
| Fieldset | `<fieldset></fieldset>` | Groups related form elements. |
| Legend | `<legend></legend>` | Caption for a fieldset. |
| Script | `<script></script>` | Embeds JavaScript code. |

### Attribute Syntax

Attributes provide additional information or functionality to HTML elements.

General Syntax:

```html
<tag attribute="value">
```

Example:

```html
<a href="crew.html" target="_blank">
    Visit Crew Page
</a>
```

## Common HTML Attributes

| Attribute | Example | Description |
|------------|----------|-------------|
| `href` | `<a href="crew.html">` | Specifies the destination of a hyperlink. |
| `src` | `<img src="luffy.png">` | Specifies the source file for images, audio, and video. |
| `alt` | `<img alt="Luffy">` | Alternative text shown if an image fails to load. |
| `width` | `<img width="150">` | Sets the width of an element. |
| `height` | `<img height="220">` | Sets the height of an element. |
| `title` | `<a title="Visit Crew Page">` | Tooltip displayed when hovering over an element. |
| `target` | `<a target="_blank">` | Controls where a link opens. |
| `type` | `<source type="audio/mpeg">` | Specifies the type of data or input. |
| `controls` | `<audio controls>` | Displays media controls. |
| `autoplay` | `<audio autoplay>` | Automatically starts media playback. |
| `muted` | `<video muted>` | Starts media in a muted state. |
| `loop` | `<audio loop>` | Repeats media continuously. |
| `style` | `<p style="color:red">` | Applies inline CSS styling. |
| `id` | `<p id="message">` | Assigns a unique identifier to an element. |
| `onclick` | `<button onclick="func()">` | Executes JavaScript when clicked. |
| `border` | `<table border="1">` | Adds a border to a table. |
| `align` | `<td align="center">` | Aligns content inside a table cell. |
| `name` | `<input name="email">` | Assigns a name to form data. |
| `value` | `<input value="Luffy">` | Sets a default value. |
| `placeholder` | `<input placeholder="Enter Name">` | Displays hint text inside an input field. |
| `required` | `<input required>` | Makes a form field mandatory. |

---

## Detailed Notes

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

---

### Images

We see many websites containing images, right? Time to learn how to add them.

Images are added using the `<img>` tag. It is a **self-closing tag**, meaning it does not require a closing tag.

The most important attribute is `src`, which specifies the image file or location that should be displayed.

Example:

```html
<img src="luffy.png">
```

We can also use the `width` and `height` attributes to resize an image.

```html
<img src="luffy.png" width="150">
```

- In most cases, specifying only the `width` or only the `height` is sufficient.
- The other dimension is automatically adjusted according to the image's aspect ratio.
- Setting both `width` and `height` may stretch or distort the image if the proportions do not match the original image.

Another useful attribute is `alt` (**alternative text**).

```html
<img src="luffy.png" alt="Monkey D. Luffy">
```

The `alt` text serves two purposes:

- If the image fails to load, the text can be displayed instead.
- Screen readers can use the text to describe the image to visually impaired users.

#### Bonus

Images can also be used as hyperlinks by wrapping the `<img>` tag inside an anchor (`<a>`) tag.

```html
<a href="index.html">
    <img src="luffy.png" alt="Monkey D. Luffy">
</a>
```

GIFs can also be displayed using the `<img>` tag.

```html
<img src="luffy.gif" alt="Luffy GIF">
```

### Project Time 🚀

Now that I have learned about images, I'll try to use them in my website.

The best page to test this on is **The Crew Deck**, where I'll be:

- Adding images of the Straw Hat Pirates.
- Writing short descriptions for each crew member.
- Learning how image sizing and alternative text work in practice.

**Note:** I tried placing the crew descriptions beside their images, but I discovered that basic HTML is not well-suited for controlling page layouts. For now, the text will remain below the images. I'll revisit and improve the layout after learning CSS.

---

### Audio

Time to learn how to add audio to our webpages.

Audio can be added using the `<audio></audio>` tag.

Inside the `<audio>` tag, we use one or more `<source>` tags to specify the audio file that should be played.

Example:

```html
<audio>
    <source src="binks-sake.mp3">
</audio>
```

However, this alone will not display any audio controls on the webpage.

To make the audio player visible, add the `controls` attribute to the `<audio>` tag.

```html
<audio controls>
    <source src="binks-sake.mp3">
</audio>
```

This provides a built-in audio player with controls such as:

- Play / Pause
- Volume Control
- Seek Bar
- Playback Speed (browser-dependent)

#### Useful Attributes

**1. `autoplay`**

Automatically starts playing the audio when the webpage loads.

```html
<audio controls autoplay>
```

> Most modern browsers restrict autoplay, especially when audio is not muted.

**2. `muted`**

Starts the audio in a muted state.

```html
<audio controls muted>
```

This is commonly used together with `autoplay`.

**3. `loop`**

Repeats the audio continuously after it finishes playing.

```html
<audio controls loop>
```

#### Multiple Sources (Fallback Support)

Different browsers may support different audio formats.

To improve compatibility, multiple `<source>` tags can be provided.

```html
<audio controls>
    <source src="binks-sake.mp3" type="audio/mpeg">
    <source src="binks-sake.wav" type="audio/wav">
</audio>
```

The browser will attempt to play the first supported format.

#### Fallback Text

It is good practice to provide fallback text between the opening and closing audio tags.

```html
<audio controls>
    <source src="binks-sake.mp3" type="audio/mpeg">
    Your browser does not support audio playback.
</audio>
```

This text will be displayed if the browser cannot play the audio.

#### Notes


- Both audio and video files can either be specified directly using the `src` attribute or through one or more `<source>` tags.
- The `<audio>` tag supports multiple audio formats through multiple `<source>` tags.
- The `controls` attribute is usually required so users can interact with the audio player.
- Modern browsers often block unmuted `autoplay` to improve user experience.
- Relative paths (e.g., `audio/binks-sake.mp3`) are preferred over absolute file paths (`C:/Users/...`).

#### Layout Note

The `<audio>` player and `<img>` tag can appear on the same line if there is enough horizontal space available.

For example:

```html
<img src="cover.png" width="50">
<audio controls>
    <source src="binks_sake.mp3" type="audio/mpeg">
</audio>
```

Unlike paragraph tags (`<p>`), these elements do not necessarily start on a new line. As a result, the browser may render them side by side.

More advanced control over page layouts is typically achieved using CSS.

### Project Time 🚀

Time to build our 'Music Room' webpage, we will be adding the audio file, and a small image of brook (as a album cover) and also lyrics using our `<pre></pre>` tag, so that the viewers can sing along.

---

### Videos

Adding videos to a webpage is very similar to adding audio.

Videos can be added using the `<video></video>` tag.

Example:

```html
<video controls>
    <source src="video.mp4" type="video/mp4">
</video>
```

To make the video player visible and interactive, add the `controls` attribute.

```html
<video controls>
```

This provides built-in controls such as:

- Play / Pause
- Volume Control
- Seek Bar
- Fullscreen Mode
- Playback Speed (browser-dependent)

#### Useful Attributes

**1. `width`**

Adjusts the displayed width of the video.

```html
<video controls width="500">
```

The height is automatically adjusted according to the video's aspect ratio.

**2. `autoplay`**

Automatically starts playing the video when the webpage loads.

```html
<video controls autoplay>
```

> Most modern browsers restrict autoplay, especially when audio is not muted.

**3. `muted`**

Starts the video in a muted state.

```html
<video controls muted>
```

Often used together with `autoplay`.

**4. `loop`**

Repeats the video continuously after it finishes playing.

```html
<video controls loop>
```

#### Multiple Sources (Fallback Support)

Multiple video formats can be provided for better browser compatibility.

```html
<video controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
</video>
```

The browser will attempt to play the first supported format.

#### Fallback Text

```html
<video controls>
    <source src="video.mp4" type="video/mp4">
    Your browser does not support video playback.
</video>
```

This text is displayed if the browser cannot play the video.

#### Bonus

Videos can also be used as hyperlinks by wrapping the `<video>` tag inside an anchor (`<a>`) tag.

```html
<a href="index.html">
    <video controls width="300">
        <source src="video.mp4" type="video/mp4">
    </video>
</a>
```

#### Notes

- Most concepts from the `<audio>` tag also apply to the `<video>` tag.
- `controls`, `autoplay`, `muted`, `loop`, fallback sources, and MIME types work in a similar manner.
- Relative paths are preferred over absolute file paths.

### Project Time 🚀

No changes will be made to **The Thousand Sunny** project for this section.

The concepts learned for videos are largely identical to those used for audio, and adding copyrighted anime clips or episodes may introduce copyright concerns when publishing the project.

For now, I will move on to the next topic and revisit videos later if needed.

---

## DAY 3

### Favicons

Favicons are the small icons that appear on a browser tab beside the webpage title.

Since favicons are related to the webpage's metadata, they must be added inside the `<head>` section of the HTML document.

Favicons are added using the `<link>` tag.

Example:

```html
<link rel="icon" type="image/png" href="Assets/favicon.png">
```

#### Attributes

**1. `rel="icon"`**

Specifies that the linked file should be used as the webpage's favicon.

**2. `type=""`**

Specifies the image format of the favicon.

Examples:

```html
type="image/png"
type="image/jpeg"
type="image/gif"
type="image/x-icon"
type="image/svg+xml"
```

**3. `href=""`**

Specifies the relative path to the favicon file.

```html
href="Assets/favicon.png"
```

#### Notes

- Favicons should be placed inside the `<head>` section.
- Relative paths are preferred over absolute file paths.
- Browsers may cache favicons aggressively, so changes may not appear immediately after updating the image.
- The traditional favicon format is `.ico`, but modern browsers also support `.png`, `.jpg`, `.gif`, and `.svg` files.
- Animated GIF favicons are supported by some browsers, but support is not guaranteed across all browsers.

### Project Time 🚀

Nothing much... just find some good icons for my webpages and gonna add them.

---

## DAY 4

### Text Formatting

HTML provides several tags that can be used to emphasize content, indicate importance, or improve the visual appearance of text.

#### Common Formatting Tags

**1. Bold Text**

```html
<b>Bold Text</b>
```

Displays the text in bold.

**2. Italic Text**

```html
<i>Italic Text</i>
```

Displays the text in italics.

**3. Underlined Text**

```html
<u>Underlined Text</u>
```

Displays the text with an underline.

**4. Deleted Text**

```html
<del>Deleted Text</del>
```

Displays the text with a strikethrough.

Example:

```html
Former Bounty: <del>100,000,000</del>
```

**5. Larger Text**

```html
<big>Big Text</big>
```

Displays slightly larger text.

> Note: `<big>` is obsolete in modern HTML and is rarely used today.

**6. Smaller Text**

```html
<small>Small Text</small>
```

Displays smaller text.

**7. Subscript**

```html
H<sub>2</sub>O
```

Output:

```text
H₂O
```

Commonly used in chemical formulas.

**8. Superscript**

```html
x<sup>2</sup>
```

Output:

```text
x²
```

Commonly used in mathematical expressions.

**9. Monospaced Text**

```html
<tt>Monospaced Text</tt>
```

Displays text using a monospaced font (each character occupies the same width).

Example:

```text
WWW
iii
```

Normally these take different widths, but in a monospaced font every character occupies equal space.

> Note: `<tt>` is obsolete in modern HTML. The `<code>` tag is usually preferred.

**10. Highlighted Text**

```html
<mark>Highlighted Text</mark>
```

Highlights the text, usually with a yellow background.

#### Bonus: A Small Peek Into CSS

HTML elements can be styled using the `style` attribute.

Example:

```html
<mark style="background-color: lightgreen">
    Highlighted Text
</mark>
```

This changes the highlight color from the default yellow to light green.

Other examples:

```html
<p style="color: red">Red Text</p>

<p style="background-color: black">
    Background Color
</p>
```

> CSS will be covered in much greater detail later. For now, it is enough to know that the `style` attribute can be used to customize the appearance of HTML elements.

#### Notes

- Formatting tags help improve readability and emphasize important content.
- Some tags such as `<big>` and `<tt>` are considered obsolete in modern HTML.
- CSS is generally preferred for controlling appearance, but basic formatting tags are still useful and commonly encountered.

### Project Time 🚀

Not much here either, [There isn't even much text to begin with]. Maybe for now I'll just sprinkle some formatting a bit.

---

### Span & Div

The `<span>` and `<div>` tags are generic containers used to group HTML elements together, usually for styling or organization purposes.

By themselves, they do not change the appearance of a webpage. Their usefulness becomes apparent when combined with CSS.

#### Span

The `<span>` tag is an **inline container**.

It is used to style or group a small portion of text without breaking the flow of the surrounding content.

Example:

```html
<p>
    Monkey D. <span style="color: red">Luffy</span> is the captain.
</p>
```

Output:

```text
Monkey D. Luffy is the captain.
```

Only the wrapped text is affected, and it remains on the same line as the surrounding text.

---

#### Div

The `<div>` tag is a **block container**.

It creates a separate block on the webpage and typically starts on a new line.

Example:

```html
<div style="background-color: lightgray">
    This is a separate section.
</div>
```

Unlike `<span>`, a `<div>` occupies its own block of space.

---

#### Key Difference

**`<span>`**

- Inline container.
- Remains within the current line of text.
- Used for styling small portions of content.

**`<div>`**

- Block container.
- Starts on a new line and occupies its own section.
- Used for grouping larger sections of content.

Example:

```html
<p>
    I want to highlight
    <span style="color:red">this text</span>
    only.
</p>

<div style="background-color:lightyellow">
    This entire section belongs together.
</div>
```

#### Notes

- Both `<span>` and `<div>` are primarily used with CSS.
- They do not provide any visual changes on their own.
- `<span>` is generally used for small pieces of content.
- `<div>` is generally used for larger sections or layouts.

#### Rule of Thumb

- Use `<span>` for styling part of a line.
- Use `<div>` for styling an entire section.
- Lists, paragraphs, headings, and other block elements should generally be placed inside `<div>`, not `<span>`.

### Project Time 🚀

No changes will be made to **The Thousand Sunny** project for this section.

While `<span>` and `<div>` are extremely useful, their real power comes from CSS. At this stage, adding them to the project would not provide much benefit and may even make the code unnecessarily cluttered.

I will revisit these tags after learning CSS and use them to improve the website's layout and styling.

---

### Lists

Lists are used to organize related items together.

HTML provides three main types of lists.

#### 1. Unordered Lists

Unordered lists are used when the order of items does not matter.

They are created using the `<ul>` tag, and each item is represented using the `<li>` (**List Item**) tag.

Example:

```html
<ul>
    <li>Luffy</li>
    <li>Zoro</li>
    <li>Nami</li>
</ul>
```

Output:

- Luffy
- Zoro
- Nami

#### 2. Ordered Lists

Ordered lists are used when the order of items is important.

They are created using the `<ol>` tag, and each item is represented using the `<li>` tag.

Example:

```html
<ol>
    <li>East Blue</li>
    <li>Grand Line</li>
    <li>New World</li>
</ol>
```

Output:

1. East Blue
2. Grand Line
3. New World

#### 3. Description Lists

Description lists are used to represent terms and their descriptions.

They are created using:

- `<dl>` (**Description List**)
- `<dt>` (**Description Term**)
- `<dd>` (**Description Details**)

Example:

```html
<dl>
    <dt>Luffy</dt>
    <dd>Captain of the Straw Hat Pirates.</dd>

    <dt>Zoro</dt>
    <dd>Swordsman of the crew.</dd>
</dl>
```

#### Nested Lists

Lists can be nested inside other lists.

Example:

```html
<ul>
    <li>Straw Hat Pirates
        <ul>
            <li>Luffy</li>
            <li>Zoro</li>
            <li>Nami</li>
        </ul>
    </li>
</ul>
```

Nested lists are supported for both ordered and unordered lists.

#### Notes

- `<li>` tags are used inside both `<ul>` and `<ol>`.
- `<dl>` lists use `<dt>` and `<dd>` instead of `<li>`.
- Lists can be nested to create subcategories.
- Lists are commonly used for navigation menus, item collections, and structured information.

### Project Time 🚀

Just added a bit of unordered lists in the 'crew' page.

---

## DAY 5

### Tables

Tables are used to organize data into rows and columns.

A table is created using the `<table>` tag.

#### Table Rows

Each row in a table is represented using the `<tr>` (**Table Row**) tag.

```html
<tr>
</tr>
```

#### Table Headers

Table headers are represented using the `<th>` (**Table Header**) tag.

Headers are typically used in the first row of a table to indicate the meaning of each column.

```html
<th>Name</th>
<th>Role</th>
<th>Bounty</th>
```

By default, header text is displayed in bold and centered.

#### Table Data

Table data is represented using the `<td>` (**Table Data**) tag.

```html
<td>Luffy</td>
<td>Captain</td>
<td>3,000,000,000</td>
```

These cells contain the actual data that appears under the headers.

#### Basic Example

```html
<table border="1">

    <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Bounty</th>
    </tr>

    <tr>
        <td>Luffy</td>
        <td>Captain</td>
        <td>3,000,000,000</td>
    </tr>

</table>
```

#### Useful Attributes

**1. `border`**

Controls the thickness of the table border.

```html
<table border="1">
```

Examples:

```html
border="0"
border="1"
border="2"
border="5"
```

Larger values create thicker borders.

> Note: The `border` attribute is mainly used for learning purposes. Modern websites usually use CSS for table borders.

**2. `align`**

Can be used to align text inside cells.

```html
<td align="center">Luffy</td>
```

Possible values:

```html
left
center
right
```

> Note: `align` is considered obsolete in modern HTML and is usually replaced by CSS.

**3. `width` and `height`**

Can be used on table cells to help create a more uniform appearance.

```html
<th width="200">Name</th>
```

#### Styling with CSS

Colors can be applied using the `style` attribute.

```html
<th style="background-color: gold">
    Bounty
</th>
```

Example:

```html
<td style="background-color: lightblue">
    Navigator
</td>
```

#### Tables Can Contain Other Elements

Table cells can contain many HTML elements, including:

- Images
- Hyperlinks
- Lists
- Audio
- Videos
- Paragraphs

Example:

```html
<td>
    <img src="luffy.png" width="100">
</td>
```

This allows tables to be used for more complex layouts.

#### Notes

- `<table>` creates the table.
- `<tr>` creates a row.
- `<th>` creates a header cell.
- `<td>` creates a data cell.
- Tables are best used for tabular data.
- Modern websites generally use CSS for layouts instead of tables.

### Project Time 🚀

Finally some major improment to the website...

One possible improvement for **The Crew Deck** page is to place each crew member's wanted poster in one column and their description in another. This would allow the text to appear beside the image instead of below it.

---

### Buttons

Buttons can be created using the `<button></button>` tag.

The text placed between the opening and closing button tags will appear on the button.

Example:

```html
<button>Click Me</button>
```

By default, buttons do not perform any action. They are often combined with hyperlinks, forms, or JavaScript to make them interactive.

#### Styling Buttons (Inline CSS)

The appearance of a button can be customized using the `style` attribute.

Example:

```html
<button style="font-size: 20px">
    Click Me
</button>
```

Some common CSS properties:

**1. Font Size**

```html
font-size: 20px;
```

Controls the size of the button text.

**2. Background Color**

```html
background-color: lightblue;
```

Changes the button's background color.

**3. Text Color**

```html
color: white;
```

Changes the color of the text.

**4. Rounded Corners**

```html
border-radius: 10px;
```

Makes the button corners rounded.

Multiple CSS properties can be combined:

```html
<button
    style="
        font-size:20px;
        background-color:gold;
        color:black;
        border-radius:10px;
    ">
    Click Me
</button>
```

#### Using Buttons as Hyperlinks

Buttons can be wrapped inside anchor tags to navigate to another webpage.

```html
<a href="crew.html">
    <button>The Crew Deck</button>
</a>
```

Clicking the button will open the linked page.

### A Small Peek Into JavaScript

JavaScript can be used to make buttons perform actions when clicked.

JavaScript code is usually written inside `<script></script>` tags.

Example:

```html
<script>

function greet()
{
    document.getElementById("message").innerHTML = "Hello Pirate!";
}

</script>
```

Buttons support the `onclick` attribute.

When the button is clicked, the specified JavaScript function is executed.

```html
<button onclick="greet()">
    Click Me
</button>
```

#### The `id` Attribute

The `id` attribute can be used to uniquely identify an HTML element.

Example:

```html
<p id="message">
    Hello
</p>
```

Using JavaScript, we can modify the content of that element:

```html
document.getElementById("message").innerHTML = "New Text";
```

This replaces the existing text with the new text.

#### Notes

- Buttons are created using the `<button>` tag.
- Inline CSS can be used to customize button appearance.
- Buttons can be combined with anchor tags for navigation.
- The `onclick` attribute allows JavaScript code to run when a button is clicked.
- The `id` attribute uniquely identifies an element on the page.
- `innerHTML` can be used to modify the content of an HTML element using JavaScript.
- We can also use images inside buttons.

### Project Time 🚀

It's finally time to build the **Quiz Arena** page.

I'll create a small One Piece quiz and use buttons for the answer choices. When a button is clicked, JavaScript will determine whether the answer is correct and display the appropriate message.

This will be my first time adding actual interactivity to **The Thousand Sunny** website.

Also for project part, I had to look a bit more into JS to simplify things, here are the extended notes:

#### Parameters in JavaScript Functions

Functions can accept values called **parameters**.

```javascript
function greet(name)
{
    console.log("Hello " + name);
}
```

Here, `name` is a parameter.

When calling the function, we provide an argument:

```javascript
greet("Luffy");
```

The parameter receives the value `"Luffy"`.

Parameters make functions more flexible because the same function can work with different values.

Example from the Quiz Arena project:

```javascript
function correct(id)
{
    document.getElementById(id).textContent = "✅ Correct!";
}
```

Here, `id` is a parameter. Different question IDs can be passed to the same function, allowing one function to handle multiple questions.

```html
<button onclick="correct('ans1')">
```

## DAY 6

### HTML Forms

Forms are used to collect input from users.

```html
<form>
    ...
</form>
```

#### Form Attributes

#### action

Specifies where the form data should be sent after submission.

```html
<form action="process.php">
```

- Usually points to a backend file or URL that processes the submitted data.
- Examples:
  - `process.php`
  - `login.php`
  - `/submit-form`
- If omitted, the form submits to the current page.

#### method

Specifies how the data is sent.

```html
<form method="get">
```

or

```html
<form method="post">
```

##### GET

- Data is visible in the URL.
- Suitable for searches and non-sensitive data.

Example:

```text
/search?name=Bhavesh
```

##### POST

- Data is sent in the request body.
- Used for passwords, personal information, etc.

#### enctype *(Backend Topic - Skip for Now)*

```html
<form enctype="multipart/form-data">
```

Used when uploading files such as images or documents.

### Labels and Inputs

A label describes what information the user should enter.

```html
<label for="username">Username:</label>
<input type="text" id="username">
```

#### Why use `for` and `id`?

```html
<label for="username">Username:</label>
<input id="username">
```

- Connects the label to the input field.
- Clicking the label places the cursor inside the input box.
- Improves accessibility and screen-reader support.

#### Text Input

```html
<input type="text">
```

Useful attributes:

```html
<input
    type="text"
    required
    minlength="3"
    maxlength="20"
    placeholder="Enter your username">
```

##### Attributes

| Attribute | Purpose |
|-----------|---------|
| required | Cannot leave field blank |
| minlength | Minimum number of characters |
| maxlength | Maximum number of characters |
| placeholder | Hint shown before typing |

### Submit Button

```html
<input type="submit">
```

Submits the form.

### Reset Button

```html
<input type="reset">
```

Resets all fields to their default values.

### Password Input

```html
<input type="password">
```

Characters appear as dots/asterisks instead of visible text.

### Email Input

```html
<input type="email">
```

Requires a valid email format.

Example:

```text
user@example.com
```

### Telephone Input

```html
<input type="tel">
```

Used for phone numbers.

**Note:** `tel` does not automatically enforce digits-only input.

To enforce a format, use `pattern`.

```html
<input
    type="tel"
    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
```

Accepts:

```text
123-456-7890
```

#### Pattern Breakdown

```text
[0-9]
```

Any digit from 0 to 9.

```text
[0-9]{3}
```

Exactly 3 digits.

```text
[0-9]{4}
```

Exactly 4 digits.

### Date Input

```html
<input type="date">
```

Provides an interactive calendar.

### Number Input

```html
<input
    type="number"
    min="1"
    max="10"
    value="5">
```

#### Attributes

| Attribute | Purpose |
|-----------|---------|
| min | Minimum allowed value |
| max | Maximum allowed value |
| value | Default value |

Most browsers provide up/down arrows.

### Radio Buttons

Used when only one option should be selected.

```html
<input type="radio" name="title"> Mr
<input type="radio" name="title"> Ms
<input type="radio" name="title"> Dr
```

#### Important

If radio buttons share the same `name`, only one can be selected.

```html
<input type="radio" name="title">
<input type="radio" name="title">
<input type="radio" name="title">
```

Without a shared `name`, multiple buttons can be selected independently.

### Dropdown Menu

```html
<select>
    <option>India</option>
    <option>Japan</option>
    <option>USA</option>
</select>
```

Creates a dropdown list.

### Checkboxes

```html
<input type="checkbox">
```

Used when multiple options may be selected.

Examples:

- Reading
- Gaming
- Music

### Text Area

Used for large amounts of text.

```html
<textarea rows="5" cols="30"></textarea>
```

#### Attributes

| Attribute | Purpose |
|-----------|---------|
| rows | Height |
| cols | Width |

Useful for:

- Comments
- Feedback
- Messages

### File Upload

```html
<input type="file">
```

Allows users to select files.

Restrict file types using `accept`.

```html
<input type="file" accept=".jpg,.png">
```

Examples:

```html
accept=".pdf"
accept=".jpg,.png"
accept="image/*"
```

### Project Time 🚀

It's time to complete the final page of **The Thousand Sunny** website.

For the Fan Mail Office, I will create a form where visitors can share information about themselves and their One Piece preferences.

The form will collect:

- Basic user information
- Favorite Straw Hat Pirate
- Favorite Arc
- Favorite Characters
- One Piece rating
- Review
and many more!!!

This project will help me practice a variety of HTML form elements while creating a page that feels like a natural part of the website.

---

## DAY 7

### Headers & Footers

HTML provides semantic tags that describe the purpose of different sections of a webpage.

Unlike generic containers such as `<div>`, semantic tags give meaning to the content they contain, making the code easier to read, organize, and maintain.

They also help browsers, search engines, and other tools better understand the structure of a webpage.

#### Header

The `<header>` tag represents introductory content at the top of a webpage or section.

Common uses include:

- Website logo
- Website title
- Navigation menus
- Introductory content

Example:

```html
<header>
    <h1>The Thousand Sunny</h1>
</header>
```

#### Main

The `<main>` tag represents the primary content of the webpage.

The main content should be unique to that page and typically contains the information users came to see.

Example:

```html
<main>
    <h2>Welcome aboard!</h2>
</main>
```

#### Footer

The `<footer>` tag represents concluding information at the bottom of a webpage or section.

Common uses include:

- Copyright information
- Author details
- Contact information
- Related links
- Closing remarks

Example:

```html
<footer>
    <p>Made by Bhavesh</p>
</footer>
```

#### Styling

Like any other HTML element, headers and footers can be styled using CSS.

Example:

```html
<header style="background-color: lightblue">
    ...
</header>

<footer style="background-color: lightgray">
    ...
</footer>
```

#### Nav

The `<nav>` tag is a semantic HTML element used to contain navigation links.

It commonly contains links to other pages within a website.

Example:

```html
<nav>
    <a href="index.html">Home</a>
    <a href="crew.html">Crew Deck</a>
</nav>
```

The `<nav>` tag helps organize navigation sections and makes the purpose of the content clearer to browsers and developers.

#### Notes

- `<header>`, `<main>`, and `<footer>` are semantic tags.
- Semantic tags describe the purpose of content rather than its appearance.
- They help organize webpages into meaningful sections.
- They make code easier to read and maintain.
- CSS can be applied to these tags just like any other HTML element.

### Project Time 🚀

To conclude the HTML section, I will update **The Thousand Sunny** website to use semantic HTML.

The homepage and other pages will be reorganized using:

- `<header>` for titles and introductory content
- `<main>` for the primary page content
- `<footer>` for navigation links, credits, and closing information

This will improve the structure and readability of the code while preparing the project for future CSS styling.

With this update, the HTML portion of **The Thousand Sunny** project is complete.

---

# HTML Complete ✅

The first voyage aboard **The Thousand Sunny** has come to an end.

Along the way, I learned:

- HTML Boilerplate
- Headings & Paragraphs
- Hyperlinks
- Images
- Audio & Video
- Favicons
- Text Formatting
- Span & Div
- Lists
- Tables
- Buttons
- Forms
- Headers & Footers
- Basic JavaScript Interactions

I also built a small One Piece-themed website consisting of:

- The Thousand Sunny (Home)
- The Crew Deck
- Music Room
- Quiz Arena
- Fan Mail Office

⚓ **Let's Set Sail and Learn CSS!**

---