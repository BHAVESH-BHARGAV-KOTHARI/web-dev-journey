# CSS Notes

This file contains my quick revision notes for CSS.

To learn CSS, I will progressively style the website I built during the HTML section, applying each new concept as I learn it.

After implementing a feature:
1. I'll update these notes.
2. Commit the changes to Git.
3. Move on to the next concept.

This way, the website evolves alongside my CSS knowledge and serves as a visual record of my progress.

---

## CSS Property Reference

| Property | Syntax | Description |
|----------|----------|-------------|
| color | `color: red;` | Changes the text color. |
| background | `background: black;` | Sets the background color or image. |
| font-family | `font-family: Arial, sans-serif;` | Changes the font of the text. |
| width | `width: 300px;` | Sets the width of an element. |
| height | `height: 200px;` | Sets the height of an element. |
| font-size | `font-size: 24px;` | Changes text size. |
| text-align | `text-align: center;` | Aligns text horizontally. |
| margin | `margin: 20px;` | Creates space outside an element. |
| padding | `padding: 20px;` | Creates space inside an element. |
| border | `border: 2px solid black;` | Adds a border around an element. |
| display | `display: flex;` | Controls how an element is displayed. |
| position | `position: relative;` | Controls element positioning. |
| background-color | `background-color: black;` | Changes the background color of an element. |
| font-weight | `font-weight: bold;` | Controls text thickness/boldness. |
| font-style | `font-style: italic;` | Applies italic or oblique styling. |

| Property | Syntax | Description |
|----------|----------|-------------|
| border-style | `border-style: solid;` | Sets the border style. |
| border-width | `border-width: 3px;` | Sets border thickness. |
| border-color | `border-color: gold;` | Sets border color. |
| border-radius | `border-radius: 20px;` | Rounds element corners. |
| border | `border: 3px solid gold;` | Shorthand for width, style, and color. |
| border-top | `border-top: 3px solid gold;` | Styles only the top border. |
| border-bottom | `border-bottom: 3px solid gold;` | Styles only the bottom border. |
| border-left | `border-left: 3px solid gold;` | Styles only the left border. |
| border-right | `border-right: 3px solid gold;` | Styles only the right border. |
| text-shadow | `text-shadow: 3px 3px 5px black;` | Adds a shadow to text. |
| box-shadow | `box-shadow: 5px 5px 10px black;` | Adds a shadow around an element. |
| margin | `margin: 20px;` | Sets space outside an element. |
| margin-top | `margin-top: 20px;` | Sets top margin. |
| margin-bottom | `margin-bottom: 20px;` | Sets bottom margin. |
| margin-left | `margin-left: 20px;` | Sets left margin. |
| margin-right | `margin-right: 20px;` | Sets right margin. |
| margin: auto | `margin: auto;` | Automatically calculates margins, commonly used for centering. |



---

## DAY 1

### Intro to CSS

CSS (Cascading Style Sheets) is used to style and decorate webpages. While HTML provides the structure of a webpage, CSS controls how that structure looks.

Using CSS, we can change colors, fonts, spacing, sizes, layouts, backgrounds and much more.

#### Ways to Add CSS

There are three ways to use CSS:

1. **Inline CSS**

   * CSS is written directly inside an element's opening tag using the `style` attribute.
   * Multiple properties are separated using `;`.
   * Useful for quick testing.
   * Becomes messy for large webpages since every element must be styled individually.

   ```html
   <h1 style="color: red; background: black;">
       Monkey D. Luffy
   </h1>
   ```

   Some common CSS properties:

   ```css
   color
   background
   font-family
   width
   height
   ```

   > We will learn many more properties as we move forward.

2. **Internal CSS**

   * CSS is written inside a `<style>` tag.
   * The `<style>` tag is usually placed inside the `<head>` section.
   * Styles are written using selectors and curly braces `{}`.
   * Affects all matching elements within that webpage.

   ```html
   <head>
       <style>
           h1 {
               color: red;
               background: black;
           }
       </style>
   </head>
   ```

3. **External CSS**

   * CSS is stored inside a separate `.css` file.
   * The stylesheet is connected to the HTML file using a `<link>` tag.
   * This is the most commonly used method in real projects.

   ```html
   <head>
       <link rel="stylesheet" href="style.css">
   </head>
   ```

   Example:

   ```css
   h1 {
       color: red;
       background: black;
   }
   ```

#### IDs and Classes

When we write:

```css
h1 {
    color: red;
}
```

all `<h1>` elements on the page will be affected.

Sometimes we may want to style only one specific element. For this we can use an **ID**.

```html
<h1 id="captain">Monkey D. Luffy</h1>
```

```css
#captain {
    color: red;
}
```

* IDs should generally be unique.
* IDs are referenced using `#`.

Sometimes multiple elements need the same styling. In such cases we can use a **Class**.

```html
<p class="crew-member">Zoro</p>
<p class="crew-member">Sanji</p>
<p class="crew-member">Nami</p>
```

```css
.crew-member {
    color: green;
}
```

* Multiple elements can share the same class.
* Classes are referenced using `.`.

### Descendant Selectors

Descendant selectors are used to target elements that are inside another element.

```css
nav a {
    color: blue;
}
```

This selects every `<a>` element inside a `<nav>` element.

Other examples:

```css
.crew-card img { } /* any <img> inside .crew-card */
p[id^="ans"] { }   /* any <p> whose id starts with "ans" */
```

The space between two selectors means:

> Find the first element, then look inside it for the second element.

Descendant selectors allow more precise styling without creating extra classes or IDs. We have already used descendant selectors while styling navigation links using `nav a`.

#### Why External CSS is Preferred

1. Keeps HTML cleaner and easier to read.
2. CSS can be reused across multiple webpages.
3. Easier to maintain large projects.
4. A single change in the stylesheet can update the design of an entire website.
5. Separates structure (HTML) from presentation (CSS).

### Project Time 🚀

This concludes the introduction to CSS. Time to start styling **The Thousand Sunny** website.

The first task is to create an external stylesheet and connect it to the webpage.

---

## DAY 2

### Colors in CSS

CSS provides multiple ways to specify colors.

#### Color Formats

1. **Color Names**

   * Uses predefined color names.

   ```css
   color: red;
   background-color: black;
   ```

2. **RGB Values**

   * RGB stands for Red, Green and Blue.
   * Each value ranges from 0 to 255.

   ```css
   color: rgb(255, 0, 0);
   ```

3. **Hexadecimal Values**

   * Begins with `#`.
   * Uses hexadecimal values to represent RGB colors.

   ```css
   color: #ff0000;
   ```

4. **HSL Values**

   * HSL stands for Hue, Saturation and Lightness.

   ```css
   color: hsl(0, 100%, 50%);
   ```

#### Common Color Properties

1. **`background-color`**

   * Changes the background color of an element.

   ```css
   background-color: black;
   ```

2. **`color`**

   * Changes the text color.

   ```css
   color: white;
   ```

### Fonts in CSS

Fonts control how text appears on a webpage.

#### Font Family

The `font-family` property is used to specify which font should be used.

```css
font-family: Arial;
```

**Important Notes**

* Not all fonts are available on every device or browser.
* It is good practice to provide fallback fonts.
* Multiple fonts are separated using commas.

```css
font-family: Arial, Helvetica, sans-serif;
```

If a font name contains spaces, enclose it in quotation marks.

```css
font-family: "Lucida Console", monospace;
```

#### Font Size

The `font-size` property controls the size of text.

```css
font-size: 20px;
```

**Notes**

* Default browser font size is usually `16px`.
* `1em` is equivalent to `100%` of the parent element's font size.

```css
font-size: 1em;
font-size: 150%;
```

#### Font Weight

Controls how bold the text appears.

```css
font-weight: bold;
```

```css
font-weight: 100;
font-weight: 400;
font-weight: 700;
```

#### Font Style

Used to apply italic styling.

```css
font-style: italic;
```

Other values:

```css
font-style: normal;
font-style: oblique;
```

### Google Fonts

Google Fonts provides a large collection of free web fonts.

Website:

```text
https://fonts.google.com
```

#### Using Google Fonts

1. Select a font.
2. Copy the provided `<link>` tag.
3. Paste it inside the `<head>` section of the HTML document.
4. Use the font in CSS.

Example:

```html
<head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/...">
</head>
```

```css
font-family: "Roboto", sans-serif;
```

### Local Fonts

Instead of loading fonts from the internet, we can store font files inside our project.

Example structure:

```text
project/
│
├── fonts/
│   └── OnePiece.ttf
│
├── css/
│   └── style.css
```

#### Using Local Fonts

```css
@font-face {
    src: url("../fonts/OnePiece.ttf");
    font-family: OnePiece;
}
```

Now the custom font can be used like any other font.

```css
h1 {
    font-family: OnePiece;
}
```

#### Notes

* Local fonts work without an internet connection.
* Different font files require different `@font-face` declarations.
* Common font formats include `.ttf`, `.otf`, `.woff`, and `.woff2`.

### Project Time 🚀

Time to give **The Thousand Sunny** some personality.

For this update, I connected a stylesheet to all webpages, experimented with colors, and started styling text using different fonts.

---

## DAY 3

### Borders

Borders are used to create an outline around an element.

#### Border Style

The `border-style` property determines the appearance of the border.

```css
border-style: solid;
```

Common border styles:

```css
solid
dashed
dotted
double
ridge
groove
inset
outset
none
```

* `none` removes the border.
* Some elements may have browser-default borders which can be removed using `border: none;`.

#### Border Width

Controls the thickness of the border.

```css
border-width: 3px;
```

#### Border Color

Controls the border color.

```css
border-color: gold;
```

#### Border Radius

Rounds the corners of an element.

```css
border-radius: 20px;
```

Larger values create more rounded corners.

#### Shorthand Syntax

Instead of writing three separate properties:

```css
border-width: 3px;
border-style: solid;
border-color: gold;
```

we can write:

```css
border: 3px solid gold;
```

> `border-radius` is a separate property and must still be written separately.

#### Individual Borders

We can style specific sides independently.

```css
border-top: 3px solid gold;
border-bottom: 3px solid gold;
border-left: 3px solid gold;
border-right: 3px solid gold;
```

### Project Time 🚀

Time to decorate **The Thousand Sunny**.

For this update, I experimented with different border styles and added borders around sections of the webpage.

---

### Shadows

Shadows can be added to both text and elements.

#### Text Shadows

The `text-shadow` property adds a shadow behind text.

Syntax:

```css
text-shadow: horizontal-offset vertical-offset blur-radius color;
```

Example:

```css
text-shadow: 3px 3px 5px black;
```

Parameters:

1. Horizontal offset

   * Positive → Right
   * Negative → Left

2. Vertical offset

   * Positive → Down
   * Negative → Up

3. Blur radius

   * Higher value = softer shadow

4. Color

   * Shadow color

#### Multiple Shadows

Multiple shadows can be added using commas.

```css
text-shadow:
    2px 2px 5px black,
    -2px -2px 5px gold;
```

#### Box Shadows

The `box-shadow` property adds a shadow around an element.

Example:

```css
#box {
    width: 200px;
    height: 200px;
    background-color: white;

    box-shadow: 5px 5px 10px black;
}
```

Syntax:

```css
box-shadow: horizontal-offset vertical-offset blur-radius color;
```

#### Notes

* Box shadows work on most elements, not just `<div>`.
* Often used to create depth and make elements appear elevated.
* Negative offsets can be used to place shadows above or to the left.

### Project Time 🚀

Time to make the ship stand out.

For this update, I added shadows to headings and experimented with box shadows to create depth.

---

### Margins

Margins create space around an element.

```text
Margin → Border → Padding → Content
```

Margins affect the space outside the border.

#### Equal Margin on All Sides

```css
margin: 20px;
```

#### Individual Margins

```css
margin-top: 20px;
margin-bottom: 20px;
margin-left: 20px;
margin-right: 20px;
```

#### Auto Margins

CSS can automatically calculate margins.

```css
margin: auto;
```

A common use case:

```css
width: 300px;
margin: auto;
```

This centers a block element horizontally.

#### Notes

* `margin: auto;` only works when the element has a defined width.
* Margins can be positive or negative.
* Negative margins are advanced usage and can cause elements to overlap.

#### Margin Shorthand

```css
margin: 10px 20px 30px 40px;
```

Order:

```text
Top → Right → Bottom → Left
```

Example:

```css
margin: 10px 20px;
```

means:

```text
Top & Bottom = 10px
Left & Right = 20px
```

### Padding

Padding creates space inside an element, between its content and border.

```text
Margin → Border → Padding → Content
```

Unlike margins, padding affects the space inside an element.

Common examples:

```css
padding: 20px;        /* all four sides */
padding-top: 20px;
padding-bottom: 20px;
padding-left: 20px;
padding-right: 20px;
```

Padding also supports shorthand syntax.

```css
padding: 20px;
```

Applies padding to all four sides.

```css
padding: 10px 20px;
```

The first value represents Top & Bottom, while the second value represents Left & Right.

```css
padding: 10px 20px 15px 5px;
```

The order follows:

```text
Top → Right → Bottom → Left
```

#### Margin vs Padding

- Margin = Space outside an element.
- Padding = Space inside an element.

```text
[ Margin | Border | Padding | Content | Padding | Border | Margin ]
```

Padding increases the distance between content and the border, and background colors extend into the padding area. Unlike margins, padding cannot be set to `auto`.

Padding is commonly used to make buttons, cards, navigation bars, and sections look less cramped.

### Project Time 🚀

Time to give the crew some breathing room.

For this update, I used margins to separate sections and improve the overall layout of **The Thousand Sunny** website.

---