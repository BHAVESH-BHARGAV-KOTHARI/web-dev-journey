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


