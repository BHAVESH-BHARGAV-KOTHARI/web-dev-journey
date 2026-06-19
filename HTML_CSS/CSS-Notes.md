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

#### Why External CSS is Preferred

1. Keeps HTML cleaner and easier to read.
2. CSS can be reused across multiple webpages.
3. Easier to maintain large projects.
4. A single change in the stylesheet can update the design of an entire website.
5. Separates structure (HTML) from presentation (CSS).

### Project Time 🚀

This concludes the introduction to CSS. Time to start styling **The Thousand Sunny** website.

The first task is to create an external stylesheet and connect it to the webpage.