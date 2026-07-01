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

| float | `float: left;` | Allows content to wrap around an element. |
| clear | `clear: left;` | Prevents elements from wrapping around floated elements. |
| display | `display: flow-root;` | Creates a new block formatting context and contains floated elements. |
| overflow | `overflow: auto;` | Controls how overflowing content is handled. |
| overflow-x | `overflow-x: scroll;` | Controls horizontal overflow. |
| overflow-y | `overflow-y: hidden;` | Controls vertical overflow. |
| overflow-clip-margin | `overflow-clip-margin: 10px;` | Extends the clipping boundary when using `overflow: clip`. |

| display | `display: block;` | Controls how an element is displayed. |
| visibility | `visibility: hidden;` | Makes an element invisible while preserving its space. |
| width | `width: 300px;` | Sets an element's width. |
| height | `height: 150px;` | Sets an element's height. |
| box-sizing | `box-sizing: border-box;` | Includes padding and border within an element's specified size. |
| min-width | `min-width: 200px;` | Sets the minimum width of an element. |
| max-width | `max-width: 600px;` | Sets the maximum width of an element. |
| min-height | `min-height: 100px;` | Sets the minimum height of an element. |
| max-height | `max-height: 400px;` | Sets the maximum height of an element. |
| vh | `height: 100vh;` | Viewport height unit (1vh = 1% of viewport height). |
| vw | `width: 100vw;` | Viewport width unit (1vw = 1% of viewport width). |

| position | `position: relative;` | Controls how an element is positioned. |
| top | `top: 20px;` | Moves a positioned element downward from the top. |
| bottom | `bottom: 20px;` | Moves a positioned element upward from the bottom. |
| left | `left: 20px;` | Moves a positioned element to the right from the left edge. |
| right | `right: 20px;` | Moves a positioned element to the left from the right edge. |

| background-image | `background-image: url("bg.jpg");` | Sets an image as the background. |
| background-repeat | `background-repeat: no-repeat;` | Controls whether a background image repeats. |
| background-position | `background-position: center;` | Sets the position of a background image. |
| background-attachment | `background-attachment: fixed;` | Determines whether the background scrolls with the page. |
| background-size | `background-size: cover;` | Controls the size of a background image. |
| visibility | `visibility: hidden;` | Hides an element while preserving its space. |
| > | `div > p { }` | Selects direct child elements. |
| + | `h2 + p { }` | Selects the immediately following sibling. |
| ~ | `h2 ~ p { }` | Selects all following sibling elements. |

| :hover | `button:hover { }` | Styles an element when the mouse hovers over it. |
| :active | `a:active { }` | Styles an element while it is being clicked. |
| :visited | `a:visited { }` | Styles visited links. |
| :link | `a:link { }` | Styles unvisited links. |
| :not() | `li:not(.captain) { }` | Selects all matching elements except those specified. |
| :nth-child() | `li:nth-child(odd) { }` | Selects specific child elements. |
| ::first-letter | `h1::first-letter { }` | Styles the first letter of an element. |
| ::first-line | `p::first-line { }` | Styles the first line of an element. |
| ::selection | `p::selection { }` | Styles selected text. |
| ::before | `li::before { content: "⭐"; }` | Inserts content before an element. |
| ::after | `li::after { content: "🏴‍☠️"; }` | Inserts content after an element. |
| ::marker | `li::marker { }` | Styles list markers. |

| text-decoration | `text-decoration: none;` | Removes or styles text decorations such as underlines. |
---

### Common CSS Practices

While building webpages, a few CSS rules are used so frequently that they are considered standard practice.

#### `box-sizing: border-box`

By default, an element's specified width and height apply only to its content. Any padding and border increase the final size of the element.

```css
width: 300px;
padding: 20px;
border: 5px solid black;
```

Actual width:

```text
300 + 20 + 20 + 5 + 5 = 350px
```

Using:

```css
* {
    box-sizing: border-box;
}
```

includes the padding and border within the specified width and height.

This makes layouts much easier to design, especially when using percentages (`%`) for responsive webpages.

#### Removing the Default Body Margin

Browsers apply a default margin to the `<body>` element.

This often creates unwanted white space around the webpage.

It is common practice to remove it at the beginning of a stylesheet.

```css
body {
    margin: 0;
}
```
These two rules are among the most common lines found in modern CSS projects.

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

---

## DAY 4

### Float

By default, block elements such as `<div>` and `<img>` occupy their own space, causing surrounding content to appear above or below them.

The `float` property allows text and inline content to wrap around an element.

#### Float Left

```css
#luffy {
    float: left;
}
```

The element moves to the left side of its container, and surrounding text flows around its right side and underneath it.

#### Float Right

```css
#zoro {
    float: right;
}
```

The element moves to the right side of its container, and surrounding text flows around its left side and underneath it.

#### Common Values

```css
float: left;
float: right;
float: none;
```

#### Example

```css
img {
    float: left;
    margin-right: 15px;
}
```

The margin prevents the text from touching the image.

#### Float Overflow

Sometimes a floated element may appear to escape its parent container.

```css
.container {
    display: flow-root;
}
```

Using `display: flow-root;` creates a new block formatting context and ensures the container properly contains the floated element.

#### Notes

* Float was originally designed for wrapping text around images.
* Text will usually wrap on the side and below the floated element.
* Adding margins around floated elements often improves readability.
* Modern layouts are usually created with Flexbox and Grid, but float is still useful for image/text wrapping.

---

### Overflow

The `overflow` property controls what happens when the content inside an element becomes larger than the element itself.

To observe overflow, the element usually needs a fixed width and/or height.

Example:

```css
.container {
    width: 200px;
    height: 100px;
    border: 2px solid gold;
}
```

If the content exceeds these dimensions, the overflow property determines how it is handled.

#### Overflow Values

1. **`visible`**

   * Default value.
   * Content is allowed to overflow outside the element.

   ```css
   overflow: visible;
   ```

2. **`hidden`**

   * Content that exceeds the element's boundaries is hidden.
   * The hidden content cannot be accessed by scrolling.

   ```css
   overflow: hidden;
   ```

3. **`clip`**

   * Similar to `hidden`.
   * Content is clipped at the element's boundary.
   * Does not provide scrolling.

   ```css
   overflow: clip;
   ```

4. **`overflow-clip-margin`**

   * Used together with `overflow: clip`.
   * Allows the clipping boundary to extend slightly beyond the element.

   ```css
   overflow: clip;
   overflow-clip-margin: 10px;
   ```

5. **`scroll`**

   * Always displays scrollbars.
   * Allows users to scroll and access hidden content.

   ```css
   overflow: scroll;
   ```

6. **`auto`**

   * Scrollbars appear only when necessary.
   * If the content fits inside the element, no scrollbars are shown.

   ```css
   overflow: auto;
   ```

#### Overflow in Specific Directions

CSS also allows controlling overflow separately for horizontal and vertical directions.

```css
overflow-x: scroll;
overflow-y: hidden;
```

#### Notes

* Overflow is most commonly used with fixed-size containers.
* `auto` is generally preferred over `scroll` because scrollbars only appear when needed.
* `hidden` is useful when extra content should not be visible.
* `scroll` and `auto` allow users to access overflowing content.
* `overflow-x` controls horizontal overflow.
* `overflow-y` controls vertical overflow.

## DAY 5

### Display

The `display` property determines how an element is displayed on a webpage.

#### Block Elements

Block elements start on a new line and occupy the full available width by default.

Common block elements:

```text
<h1>  <div>  <p>  <form>  <header>  <footer>
```

Properties like `width` and `height` can be applied to block elements.

#### Inline Elements

Inline elements only occupy the space required by their content and do not start on a new line.

Common inline elements:

```text
<span>  <a>  <img>
```

Unlike block elements, `width` and `height` generally have no effect on inline elements.

#### Common Display Values

1. **`display: block`**

   Converts an inline element into a block element.

   ```css
   span {
       display: block;
       width: 200px;
       height: 50px;
   }
   ```

2. **`display: inline`**

   Converts a block element into an inline element.

   ```css
   div {
       display: inline;
   }
   ```

   The element only occupies the space required by its content, and `width` and `height` no longer take effect.

3. **`display: inline-block`**

   Behaves like an inline element while still allowing `width` and `height` to be applied.

   ```css
   span {
       display: inline-block;
       width: 150px;
       height: 50px;
   }
   ```

4. **`display: none`**

   Completely removes the element from the page layout.

   ```css
   display: none;
   ```

#### Visibility

Instead of removing an element completely, we can make it invisible.

```css
visibility: hidden;
```

The element becomes invisible, but its space is still reserved on the webpage.

#### Notes

* `display: none` removes both the element and the space it occupies.
* `visibility: hidden` hides only the element while preserving its layout space.
* `inline-block` combines the advantages of both inline and block elements.
* Modern layouts are typically created using Flexbox or Grid, which are built upon the `display` property.

---

### Width and Height

The `width` and `height` properties control the size of an element.

#### Width and Height

```css
width: 300px;
height: 150px;
```

They can also be set using percentages.

```css
width: 50%;
height: 75%;
```

By default:

```css
width: auto;
height: auto;
```

The browser automatically determines the appropriate size.

#### Box Sizing

By default, CSS calculates an element's size using only its content.

```text
Actual Width = width + padding + border
```

Example:

```css
width: 200px;
padding: 20px;
border: 5px solid black;
```

The actual width becomes **250px**.

Using:

```css
box-sizing: border-box;
```

changes this behavior so that the specified width already includes the content, padding, and border.

```text
Actual Width = width
```

This makes layouts much easier to manage.

It is common practice to apply it to every element.

```css
* {
    box-sizing: border-box;
}
```

#### Minimum and Maximum Sizes

CSS allows limiting how small or large an element can become.

```css
max-width: 600px;
min-width: 200px;

max-height: 400px;
min-height: 100px;
```

These are especially useful for responsive webpages.

#### Viewport Units

The viewport is the visible area of the browser window.

```css
height: 100vh;
```

`1vh` represents **1% of the viewport height**.

Similarly,

```css
width: 100vw;
```

`1vw` represents **1% of the viewport width**.

#### Notes

* Pixels (`px`) provide fixed dimensions.
* Percentages (`%`) are relative to the parent element.
* Viewport units (`vh` and `vw`) are relative to the browser window.
* `box-sizing: border-box` is commonly used in almost every modern website.
* `min-width`, `max-width`, `min-height`, and `max-height` help create responsive layouts.

---

### Position

The `position` property determines how an element is positioned on a webpage.

Positioned elements can be moved using the following properties:

```css
top
bottom
left
right
```

#### Position Values

1. **`position: static`**

   * Default positioning method.
   * Elements appear in the normal document flow.
   * `top`, `bottom`, `left`, and `right` have no effect.

   ```css
   position: static;
   ```

2. **`position: relative`**

   * Positions an element relative to its normal position.
   * The element still occupies its original space in the document.
   * Can be moved using `top`, `bottom`, `left`, and `right`.

   ```css
   position: relative;
   top: 20px;
   left: 30px;
   ```

3. **`position: fixed`**

   * Positions an element relative to the browser viewport.
   * The element remains fixed even while scrolling.

   ```css
   position: fixed;
   right: 0;
   bottom: 20px;
   ```

   Common uses include floating navigation bars and "Back to Top" buttons.

4. **`position: absolute`**

   * Positions an element relative to its nearest positioned ancestor (an ancestor whose `position` is not `static`).
   * If no positioned ancestor exists, it is positioned relative to the webpage itself.
   * Can be freely moved using `top`, `bottom`, `left`, and `right`.

   ```css
   .parent {
       position: relative;
   }

   .child {
       position: absolute;
       top: 20px;
       left: 30px;
   }
   ```

   If the parent element moves, the absolutely positioned child moves along with it while maintaining the same position inside the parent.

5. **`position: sticky`**

   * Behaves like a relatively positioned element until a specified scroll position is reached.
   * Once that point is reached, it sticks to the viewport like a fixed element.

   ```css
   position: sticky;
   top: 0;
   ```

   Commonly used for sticky headers and navigation bars.

#### Notes

* `static` is the default position for all elements.
* `relative` moves an element from where it would normally appear.
* `absolute` positions an element relative to its nearest positioned ancestor.
* `fixed` positions an element relative to the browser window and ignores scrolling.
* `sticky` combines the behavior of `relative` and `fixed` based on the scroll position.
* The `top`, `bottom`, `left`, and `right` properties only work with positioned elements (`relative`, `absolute`, `fixed`, and `sticky`).

---

### Background Images

CSS allows images to be used as the background of an element.

#### Background Image

The `background-image` property sets an image as the background.

```css
background-image: url("Assets/background.jpg");
```

#### Background Repeat

If the background image is smaller than the element, it is repeated by default.

```css
background-repeat: no-repeat;
```

Common values:

```css
background-repeat: repeat;
background-repeat: no-repeat;
background-repeat: repeat-x;
background-repeat: repeat-y;
```

#### Background Position

The `background-position` property determines where the image appears.

```css
background-position: center;
```

Other common values:

```css
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;
```

#### Background Attachment

Determines whether the background moves while scrolling.

```css
background-attachment: fixed;
```

Common values:

```css
background-attachment: fixed;
background-attachment: scroll;
```

* `fixed` → Background remains fixed in the viewport.
* `scroll` → Background moves normally with the page.

#### Background Size

Controls the size of the background image.

```css
background-size: cover;
```

Common values:

```css
background-size: cover;
background-size: contain;
background-size: 300px 200px;
```

* `cover` scales the image to completely cover the element.
* `contain` scales the image so the entire image remains visible.

#### Notes

* Background images are purely decorative and are different from `<img>` elements.
* `background-size: cover` is commonly used for hero sections and full-page backgrounds.
* `background-repeat: no-repeat` is often used together with `background-size: cover`.

---

### Combinators

Combinators describe the relationship between selectors.

#### Descendant Combinator (` `)

Selects elements that are descendants of another element.

```css
nav a {
    color: blue;
}
```

This selects every `<a>` element inside a `<nav>` element, no matter how deeply nested.

#### Child Combinator (`>`)

Selects only the direct children of an element.

```css
div > p {
    color: red;
}
```

Only `<p>` elements that are immediate children of a `<div>` are selected.

#### General Sibling Combinator (`~`)

Selects all sibling elements that come after another element.

```css
h2 ~ p {
    color: blue;
}
```

All `<p>` elements after the `<h2>` (sharing the same parent) are selected.

#### Adjacent Sibling Combinator (`+`)

Selects only the immediately following sibling.

```css
h2 + p {
    color: green;
}
```

Only the first `<p>` immediately after the `<h2>` is selected.

#### Notes

* Descendant (` `) → Any matching descendant.
* Child (`>`) → Direct child only.
* General sibling (`~`) → All following siblings.
* Adjacent sibling (`+`) → Only the next sibling.

These combinators allow more precise styling without adding extra classes or IDs.

---

### Pseudo Classes

Pseudo classes are keywords added to selectors to style an element based on its current state.

Syntax:

```css
selector:pseudo-class {
    /* CSS */
}
```

#### Common Pseudo Classes

1. **`:link`**

   Styles links that have not yet been visited.

   ```css
   a:link {
       color: cyan;
   }
   ```

2. **`:visited`**

   Styles links that have already been visited.

   ```css
   a:visited {
       color: purple;
   }
   ```

3. **`:hover`**

   Applies styles when the mouse pointer is placed over an element.

   ```css
   a:hover {
       color: gold;
   }
   ```

4. **`:active`**

   Applies styles while the mouse button is being held down.

   ```css
   a:active {
       color: red;
   }
   ```

5. **`:not()`**

   Selects every element except the specified one.

   ```css
   li:not(.captain) {
       color: white;
   }
   ```

6. **`:nth-child()`**

   Selects specific child elements.

   ```css
   li:nth-child(3)
   li:nth-child(odd)
   li:nth-child(even)
   li:nth-child(3n)
   ```

   Example:

   ```css
   li:nth-child(odd) {
       background-color: #134074;
   }
   ```

#### Hover Effects

Pseudo classes can also be used to show or hide elements.

HTML:

```html
<div class="card">
    Hover over me!
    <p class="secret">The One Piece is real!</p>
</div>
```

CSS:

```css
.secret {
    display: none;
}

.card:hover .secret {
    display: block;
}
```

The hidden text becomes visible only while the parent element is being hovered.

#### Notes

* Pseudo classes use a **single colon (`:`)**.
* They style elements based on state rather than structure.
* `:hover` is commonly used for buttons, navigation menus, and interactive effects.
* `:nth-child()` is useful for styling alternating rows or list items.

---

### Pseudo Elements

Pseudo elements style a specific part of an element instead of the whole element.

Syntax:

```css
selector::pseudo-element {
    /* CSS */
}
```

#### Common Pseudo Elements

1. **`::first-letter`**

   Styles the first letter of an element.

   ```css
   h1::first-letter {
       color: gold;
       font-size: 2em;
   }
   ```

2. **`::first-line`**

   Styles only the first line of a paragraph.

   ```css
   p::first-line {
       font-weight: bold;
   }
   ```

3. **`::selection`**

   Styles selected text.

   ```css
   p::selection {
       background-color: gold;
       color: black;
   }
   ```

4. **`::before`**

   Inserts content before an element.

   ```css
   li::before {
       content: "⭐ ";
   }
   ```

5. **`::after`**

   Inserts content after an element.

   ```css
   li::after {
       content: " 🏴‍☠️";
   }
   ```

6. **`::marker`**

   Styles the bullet or number of list items.

   ```css
   li::marker {
       color: gold;
   }
   ```

#### Notes

* Pseudo elements use a **double colon (`::`)**.
* `::before` and `::after` require the `content` property.
* `::marker` works on list items.
* `::selection` only appears while text is selected by the user.

---

## DAY 6

### Pagination

Pagination is used to divide content into multiple pages, making a website easier to navigate.

A common approach is to create a container for the page links.

HTML:

```html
<div class="pagination">
    <a href="page1.html">&laquo;</a>
    <a href="page1.html" class="active">1</a>
    <a href="page2.html">2</a>
    <a href="page3.html">3</a>
    <a href="page2.html">&raquo;</a>
</div>
```

The `active` class is used to indicate the currently selected page.

#### Styling Pagination

The page links are usually displayed as inline blocks so that they appear side by side while still allowing width, height, and padding to be applied.

```css
.pagination a {
    display: inline-block;
    padding: 10px 16px;
    text-decoration: none;
}
```

The active page can be highlighted.

```css
.pagination a.active {
    background-color: #F4C430;
    color: black;
}
```

Hover effects can improve the user experience.

```css
.pagination a:hover:not(.active) {
    background-color: #4FC3F7;
    color: white;
}
```

Rounded corners can also be added.

```css
.pagination a {
    border-radius: 5px;
}
```

#### Notes

* Pagination makes large websites easier to browse.
* The current page is commonly highlighted using an `active` class.
* `display: inline-block` allows page links to sit on the same line while supporting width, height, padding, and margins.
* `:hover:not(.active)` prevents the active page from changing appearance when hovered.
* Pagination is commonly placed at the bottom of articles, blogs, image galleries, and search results.

---

### Dropdown Menus

Dropdown menus are commonly used to organize navigation links and save space on a webpage.

A dropdown consists of a parent container, a button, and a hidden content section that becomes visible when the user hovers over the parent.

#### HTML Structure

```html
<div class="dropdown">

    <button>Menu</button>

    <div class="content">
        <a href="">Home</a>
        <a href="">Crew</a>
        <a href="">Gallery</a>
        <a href="">Contact</a>
    </div>

</div>
```

#### Styling the Links

The links are usually displayed as block elements so that each link occupies an entire row.

```css
.dropdown a {
    display: block;
    text-decoration: none;
    padding: 10px;
}
```

#### Hiding the Menu

Initially, the dropdown content is hidden.

```css
.dropdown .content {
    display: none;
}
```

The content is commonly positioned absolutely so that it appears below the button without affecting the rest of the page layout.

```css
.dropdown .content {
    position: absolute;
    background-color: white;
    min-width: 160px;
}
```

Additional styling such as borders, shadows, and rounded corners can also be added.

#### Displaying the Menu

The dropdown becomes visible when the user hovers over the parent container.

```css
.dropdown:hover .content {
    display: block;
}
```

#### Hover Effects

Hover effects can also be applied to individual links.

```css
.dropdown a:hover {
    background-color: #4FC3F7;
    color: white;
}
```

The button itself can also change appearance when hovered.

```css
.dropdown:hover button {
    background-color: #F4C430;
}
```

#### Notes

* `display: none` hides the dropdown content until needed.
* `position: absolute` allows the dropdown menu to appear without pushing other elements down.
* `display: block` makes each link occupy its own line.
* Dropdown menus are created using HTML and CSS—JavaScript is not required for simple hover-based menus.
* More advanced dropdowns (click-to-open, nested menus, animations) are usually implemented using JavaScript.

### Responsive Website Layout

Webpages may look different on devices with different screen sizes.

A layout designed for a desktop monitor may not look good on tablets or mobile phones. CSS allows us to apply different styles based on the screen size using **media queries**.

#### Media Queries

A media query applies CSS rules only when certain conditions are satisfied.

Example:

```css
@media screen and (max-width: 600px) {

    body {
        background-color: lightblue;
    }

}
```

In this example, the CSS rules inside the media query are applied only when the screen width is **600px or smaller**.

#### Common Media Query Conditions

**Maximum Width**

```css
@media screen and (max-width: 600px) {

}
```

Applied when the screen width is **less than or equal to 600px**.

**Minimum Width**

```css
@media screen and (min-width: 600px) {

}
```

Applied when the screen width is **greater than or equal to 600px**.

#### Common Uses

Media queries are commonly used to:

* Resize text for smaller screens.
* Rearrange layouts.
* Resize images.
* Adjust spacing and margins.
* Improve navigation on mobile devices.
* Hide or display certain elements.

#### Example

```css
@media screen and (max-width: 600px) {

    nav a {
        display: block;
    }

    h1 {
        font-size: 2rem;
    }

}
```
On smaller screens:

* Navigation links appear one below another.
* The heading size is reduced.

#### Notes

* Media queries are an essential part of responsive web design.
* CSS inside a media query only applies when its condition is satisfied.
* Desktop styles are usually written first, with media queries overriding them for smaller devices.
* Multiple media queries can be used for different screen sizes.

---