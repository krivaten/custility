---
layout: default
---

## A Customizable Front End Utility Library for Developers

**Custility** is a powerful set of _truly_ customizable css utility classes, made to greatly aid in the development of potentially large and ambitious websites and apps that need a mountain of flexibility. Every class name and breakpoint can be bent to your will, allowing you to even configure it to your current project's naming guidelines. These were initially built up by Kris Van Houten, but feel free to contribute!

This library does not focus on visual things like _buttons_, _form inputs_, _tables_, _typography_, and things of the like, but serves more as a toolbox for your website or app. I am currently working on a separate library that does handle the visual portion, but that will take more time to build.

### Get Started
Custilty has several quick start options available:

- [Download the latest release](https://github.com/krivaten/custility/archive/master.zip).
- Clone the repo: `git clone https://github.com/krivaten/custility.git`.
- Install with [Bower](http://bower.io): `bower install custility`.
- Install with [npm](https://www.npmjs.com): `npm install custility`.

### Take only what you need to survive

I've done my best to make it so that adding **Custility** to your project doesn't add any unnecessary size to your compiled files. If there is a particular module you don't need, then don't include it in your build. Additionally, all the mixins required for each module are isolated to help ensure my code doesn't interfere with yours.

### Bend it to your will
Provide your own responsive break points or turn them off entirely on a per module basis, customize class names, and change the value of any computed value.

### Bro, do you even BEM?
**Custility** was made with BEM in mind, but if you haven't jumped on the train yet, we got you covered. Simply change the value of variable name `$spacer` to `'-'` and you'll feel right at home. Promise.

## Modules
Here's some of the modules that **Custility** offers:

- [Flexbox Grid](#flexbox-grid)
- [Display](#display)
- [Margin](#margin)
- [Padding](#padding)
- [Position](#position)
- [Pull](#pull)
- [Text](#text)

---
{% include sections/flexbox-grid.md %}
---
{% include sections/display.md %}
---
{% include sections/margin.md %}
---
{% include sections/padding.md %}
---
{% include sections/position.md %}
---
{% include sections/pull.md %}
---
{% include sections/text.md %}
