## Custility
[![Code Climate](https://codeclimate.com/github/krivaten/custility/badges/gpa.svg)](https://codeclimate.com/github/krivaten/custility)

Custility is a powerful set of _truly_ customizable css utility classes, made to greatly aid in the development of potentially large and ambitious websites and apps that need a mountain of flexibility. Every class name and breakpoint can be bent to your will, allowing you to even configure it to your current project's naming guidelines. These were initially built up by Kris Van Houten, but feel free to contribute!

This library does not focus on visual things like _buttons_, _form inputs_, _tables_, _typography_, and things of the like, but serves more as a ToolBox for your website or app. I am currently working on a separate library that does handle the visual portion, but that will take more time to build.

## Quick Start

Custilty has several quick start options available:

- [Download the latest release](https://github.com/krivaten/custility/archive/master.zip).
- Clone the repo: `git clone https://github.com/krivaten/custility.git`.
- Install with [Bower](http://bower.io): `bower install custility`.
- Install with [npm](https://www.npmjs.com): `npm install custility`.

## What's Included

Custility includes a large number of _utility_ classes that you are free to use. These utilities include:

**Note:** All the following examples use the default class names, all of which are configurable by modifying the variables found under `aliases.scss` or `variables.scss`. More instructions are to come on this.

### Flex grid
Yes, another grid. So why did I make this one? Because while moving away from Bootstrap, I needed a FlexBox based grid that was incredibly flexible, allowing me to utilize all the most common uses for FlexBox with the addition or removal of a class. This grid was the result.

Here is an example:

```
<div class="row">
  <div class="col--xs--12 col--xs--6">Dancing Bananas</div>
  <div class="col--xs--12 col--xs--6">Dancing Peppers</div>
</div>
```

But wait, there's more! There is a legion of modifier classes for your consumption:

#### Customizing Rows
- Allow Row to Wrap (Default): `.row--xs--w`
- Prevent Row from Wrapping: `.row--xs--nw`
- Convert Row into a Horizontal Row (Default): `.row--xs--row`
- Convert Row into a Vertical Column: `.row--xs--col`
- Align Items to `flex-start`: `.row--xs--a--fs`
- Align Items to `flex-end`: `.row--xs--a--fe`
- Align Items to `center`: `.row--xs--a--c`
- Justify Content to `flex-start`: `.row--xs--j--fs`
- Justify Content to `flex-end`: `.row--xs--j--fe`
- Justify Content to `center`: `.row--xs--j--c`
- Justify Content to `space-between`: `.row--xs--j--sb`
- Justify Content to `space-around`: `.row--xs--j--sa`

#### Customizing Columns
- Create Column: `.col--xs--6`
- Offset Column: `.col--xs--o--6`
- Set Column to Auto Width (Requires `.row--xs--nw` class on `.row`): `.col--xs--a`
- Align Column to `center`: `.col--xs--a--c`
- Align Column to `flex-start`: `.col--xs--a--fs`
- Align Column to `flex-end`: `.col--xs--a--fe`
- Change Column Order to First: `.col--xs--first`
- Change Column Order to Last: `.col--xs--last`

### Display
These utilities allow you to control the _display_ of elements, and are very simple to use.

Here is an example:

```
<div class="dsp--xs--none dsp--lg--block">I am visible as a block element on large screens</div>
<div class="dsp--xs--none dsp--md--inline">I am visible as an inline element on medium screens</div>
```

### Margin
These classes allow you to set various _margins_ to the left, right, top, bottom, x-axis, and y-axis of elements, and are incredibly useful.

Here is an example:

```
<div class="mar--lg--t">I add a large margin to the top</div>
<div class="mar--md--x">I add a medium margin to the x-axis</div>
<div class="mar--0">I remove the margin on all sides</div>
```

### Padding
These classes allow you to set various _padding_ to the left, right, top, bottom, x-axis, and y-axis of elements, and much like margins, are very handy.

Here is an example:

```
<div class="pad--lg--t">I add a large padding to the top</div>
<div class="pad--md--x">I add a medium padding to the x-axis</div>
<div class="pad--0">I remove the padding on all sides</div>
```

### Position
With these you can control the _position_ of elements. Though FlexBox has remove much of the need for these, they still come in use sometimes.

Here is an example:
```
<div class="pos--md--abs pos--md--tr">I will appear on the top-right on medium screens</div>
<div class="pos--lg--abs pos--lg--l">I will appear on the left on large screens</div>
```

### Pull
These are your simple _pull_ classes that may come to your rescue on occassion.

Here is an example:
```
<div class="pull--xs--left">I will be pulled to the left on all screens</div>
<div class="pull--md--right">I will be pulled to the right on medium screens</div>
```

### Text
These are some simple text classes that can prove very useful if you want have a little more granular control over text styles:

Here is an Example:
```
<p class="txt--md--c">I will be center aligned on medium screens</p>
<p class="txt--xs--str">I will be bold on all screens</p>
<p class="txt--lg--emp">I will be italic on large screens</p>
<p class="txt--md--ell">I will have an ellipsis on medium screens</p>
```

## Customizing
Coming soon!

## Creator

**Kris Van Houten**
- <http://krivaten.com>
- <https://twitter.com/krivaten>

## Copyright and license

Code and documentation copyright 2016 Totiba. Code released under the MIT license.
