---
layout: default
---

## A Customizable Front End Utility Library for Developers

**Custility** makes front end development of both small and large apps much easier with its powerful set of utility classes.

This isn't Bootstrap that, while a great tool, will make your website look like millions of others. Rather, this toolbox gives you the freedom to design your product the way you want, while kindly offering you a set of tools to help you make it great.

## Modules
Here's some of the modules that **Custility** offers:

- [Flexbox Grid](#flexbox-grid)
- [Display](#display)
- [Margin](#margin)
- [Padding](#padding)
- [Position](#position)
- [Pull](#pull)
- [Text](#text)

### Take only what you need to survive

I've done my best to make it so that adding **Custility** to your project doesn't add any unnecessary size to your compiled files. If there is a particular module you don't need, then don't include it in your build. Additionally, all the mixins required for each module are isolated to help ensure my code doesn't interfere with yours.

### Bend it to your will
Provide your own responsive break points or turn them off entirely on a per module basis, customize class names, and change the value of any computed value.

### Bro, do you even BEM?
**Custility** was made with BEM in mind, but if you haven't jumped on the train yet, we got you covered. Simply change the value of variable name `$spacer` to `'-'` and you'll feel right at home. Promise.

### Get Started
Custilty has several quick start options available:

- [Download the latest release](https://github.com/krivaten/custility/archive/master.zip).
- Clone the repo: `git clone https://github.com/krivaten/custility.git`.
- Install with [Bower](http://bower.io): `bower install custility`.
- Install with [npm](https://www.npmjs.com): `npm install custility`.

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
