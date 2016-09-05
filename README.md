## Custility

![Custility Logo](https://raw.githubusercontent.com/krivaten/custility/master/docs/img/logo.png "Custility")


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
Here's the of the modules that **Custility** currently offers:

- [Flexbox Grid](#flexbox-grid)
- [Display](#display)
- [Margin](#margin)
- [Padding](#padding)
- [Position](#position)
- [Pull](#pull)
- [Text](#text)

## Flexbox grid

[(back to top)](#top)

Yes, another grid. So why did I make this one? Because while moving away from Bootstrap, I needed a FlexBox based grid that was incredibly flexible, allowing me to utilize all the most common uses for FlexBox with the addition or removal of a class. This grid was the result.

### Prefixes
By default, responsive breakpoint based class names are generated for you. If you would like to generate non-responsive breakpoint class names, set the variable `$include-responsive-grid` to `false`. If you do this, the only column prefix will be `.col--`, otherwise you will have the following:

#### Rows
- `.row`: Creates a row

#### Columns
- `.col--xs--`: Adds a column on screens **0px** wide and up
- `.col--sm--`: Adds a column on screens **544px** wide and up
- `.col--md--`: Adds a column on screens **769px** wide and up
- `.col--lg--`: Adds a column on screens **992px** wide and up
- `.col--xl--`: Adds a column on screens **1200px** wide and up

### Suffixes
The _suffixes_ are the values you can append to the end of the _row_ and _column_ prefixes (i.e., `.col--xs--8`), to impact the grid layout of the elements. Unless you edit the corresponding _alias_ variable values, your options will be named the following:

#### Rows
- `nw`: Prevents the row contents from wrapping (Default)
- `w`: Allows the row contents to wrap
- `row`: Convert a row into a Horizontal Row (Default)
- `col`: Convert a row into a Vertical Row
- `str`: Set contents to fill the available height
- `flush`: Set column to have no margin
- `a--fs`: Align row items to `flex-start`
- `a--fe`: Align row items to `flex-end`
- `a--c`: Align row items to `center`
- `j--fs`: Justify row contents to `flex-start`
- `j--fe`: Justify row contents to `flex-end`
- `j--c`: Justify row contents to `center`
- `j--sb`: Justify row contents to `space-between`
- `j--sa`: Justify row contents to `space-around`

#### Columns
- `#`: Create Column where # is any column size 1-12
- `o--#`: Offset Column where # is any column size 1-12
- `str`: Set column to fill the available height
- `a`: Set Column to Auto Width (Requires `.row--xs--nw` class on `.row`)
- `a--c`: Align Column to `center`
- `a--fs`: Align Column to `flex-start`
- `a--fe`: Align Column to `flex-end`
- `first`: Change Column Order to First
- `last`: Change Column Order to Last

### Examples

```html
  <div class="row row--md--sb">
    <div class="col--xs--6 col--md--4">
      Will only be four columns wide on screens 769px wide and greater
    </div>
    <div class="col--xs--6 col--md--a--c">
      Will be six columns wide and aligned center on screens 769px wide and greater
    </div>
    <div class="col--xs--12 col--md--first">
      Will be full width and displayed first on screens 769px wide and larger
    </div>
  </div>
```

### Variables
The following are the variables that are used, along with their default values, which may be modified to your liking.

```scss
  // Grid Variables
  $include-offset-columns: true;
  $include-responsive-grid: true;
  $grid-columns: 12;
  $grid-gutter: 30px;
  $screen-params: (
    xs: $screen-xs,
    sm: $screen-sm,
    md: $screen-md,
    lg: $screen-lg,
    xl: $screen-xl
  );

  // Display Aliases
  $row-alias: row;
  $column-alias: col;
  $flex-end-alias: fe;
  $flex-start-alias: fs;
  $space-between-alias: sb;
  $space-around-alias: sa;
  $align-alias: a;
  $justify-alias: j;
  $flush-alias: flush;
  $first-alias: first;
  $last-alias: last;
  $wrap-alias: w;
  $nowrap-alias: nw;
  $stretch-alias: str;
  $offset-alias: o;
```

## Display

[(back to top)](#top)

These utilities allow you to control the _display_ of elements.

### Prefixes
By default, responsive breakpoint based class names are generated for you. If you would like to generate non-responsive breakpoint class names, set the variable `$include-responsive-display` to `false`. If you do this, the only display prefix will be `.dsp--`, otherwise you will have the following:

- `.dsp--xs--`: Affects display on screens **0px** wide and up
- `.dsp--sm--`: Affects display on screens **544px** wide and up
- `.dsp--md--`: Affects display on screens **769px** wide and up
- `.dsp--lg--`: Affects display on screens **992px** wide and up
- `.dsp--xl--`: Affects display on screens **1200px** wide and up

### Suffixes
The _suffixes_ are the values you can append to the end of the _display_ prefixes (i.e., `.dsp--xs--none`), to impact the visibility and appearance of the element. Unless you edit the corresponding _alias_ variable values, your options will be named the following:

- `none`: Hides the element
- `blk`: Displays the element as a **block**
- `inl`: Displays the element as **inline**
- `inl-blk`: Displays the element as an **inline-block**
- `sb`: Displays the element using flexbox's **space-between**
- `sa`: Displays the element using flexbox's **space-around**

### Examples

```html
  <div class="dsp--xs--none dsp--xl--blk">
    Will only be visible on screens 1200px wide and greater
  </div>
  <div class="dsp--xs--inl-blk dsp--xl--none">
    Will be an inline block up to 1200px, from there it will be hidden
  </div>
  <div class="dsp--xs--sb">
    Will use flexbox's `space-between` feature on all screen sizes
  </div>
```

### Variables
The following are the variables that are used, along with their default values, which may be modified to your liking.

```scss
  // Display Variables
  $include-responsive-display: true;
  $display-params: $screen-params;

  // Display Aliases
  $display-alias: dsp;
  $block-alias: blk;
  $inline-alias: inl;
  $none-alias: none;
  $space-between-alias: sb;
  $space-around-alias: sa;
```

## Margin

[(back to top)](#top)

These utilities allow you to control the _margin_ of elements.

### Prefixes
By default, there are six margin prefixes that determine the size of the margin to be added. While the names and sizes can be changed by overriding the `$margin-params` variable, out of the box they are the the following:

- `.mar--0--`: Removes all margin
- `.mar--xs--`: Adds a margin of **16px**
- `.mar--sm--`: Adds a margin of **32px**
- `.mar--md--`: Adds a margin of **48px**
- `.mar--lg--`: Adds a margin of **64px**
- `.mar--xl--`: Adds a margin of **80px**

### Suffixes
The _suffixes_ that can be added to the margin class give you a lot of flexibility as to where and how margin will be applied. Unless you edit the corresponding _alias_ variable values, your options will be named the following:

- `t`: Adds margin to the **top**
- `b`: Adds margin to the **bottom**
- `l`: Adds margin to the **left**
- `r`: Adds margin to the **right**
- `x`: Adds margin to the **x-axis**
- `y`: Adds margin to the **y-axis**

### Examples

```html
  <div class="mar--x--y mar--xl--x">
    Will have no margin on the y-axis but xl margin on the x-axis
  </div>
  <div class="mar--xs--t mar--md--r">
    Will have 16px margin on the top and md margin on the right
  </div>
  <div class="mar--lg--b">
    Will have lg margin on the bottom
  </div>
```

### Variables
The following are the variables that are used, along with their default values, which may be modified to your liking.

```scss
  //Margin Variables
  $include-margin: true;
  $margin-params: (
    0: 0,
    xs: $base-space,
    sm: ($base-space * 2),
    md: ($base-space * 3),
    lg: ($base-space * 4),
    xl: ($base-space * 5)
  );

  // Margin Aliases
  $margin-alias: mar;
  $left-alias: l;
  $right-alias: r;
  $top-alias: t;
  $bottom-alias: b;
  $center-alias: c;
  $vertical-alias: y;
  $horizontal-alias: x;
```

## Padding

[(back to top)](#top)

These utilities allow you to control the _padding_ of elements.

### Prefixes
By default, there are six padding prefixes that determine the size of the padding to be added. While the names and sizes can be changed by overriding the `$padding-params` variable, out of the box they are the the following:

- `.pad--0--`: Removes all padding
- `.pad--xs--`: Adds a padding of **16px**
- `.pad--sm--`: Adds a padding of **32px**
- `.pad--md--`: Adds a padding of **48px**
- `.pad--lg--`: Adds a padding of **64px**
- `.pad--xl--`: Adds a padding of **80px**

### Suffixes
The _suffixes_ are the values you can append to the end of the _padding_ prefixes (i.e., `.pad--md--l`), to impact the padding of the element. Unless you edit the corresponding _alias_ variable values, your options will be named the following:

- `t`: Adds padding to the **top**
- `b`: Adds padding to the **bottom**
- `l`: Adds padding to the **left**
- `r`: Adds padding to the **right**
- `x`: Adds padding to the **x-axis**
- `y`: Adds padding to the **y-axis**

### Examples

```html
  <div class="pad--0--y pad--xl--x">
    Will have no padding on the y-axis but 80px padding on the x-axis
  </div>
  <div class="pad--xs--t pad--md--r">
    Will have 16px padding on the top and 32px padding on the right
  </div>
  <div class="pad--lg--b">
    Will have 64px padding on the bottom
  </div>
```

### Variables
The following are the variables that are used, along with their default values, which may be modified to your liking.

```scss
  // Padding Variables
  $base-space: 1em;
  $include-padding: true;
  $padding-params: (
    0: 0,
    xs: $base-space,
    sm: ($base-space * 2),
    md: ($base-space * 3),
    lg: ($base-space * 4),
    xl: ($base-space * 5)
  );

  // Padding Aliases
  $padding-alias: pad;
  $left-alias: l;
  $right-alias: r;
  $top-alias: t;
  $bottom-alias: b;
  $center-alias: c;
  $vertical-alias: y;
  $horizontal-alias: x;
```

## Position

[(back to top)](#top)

These utilities allow you to control the _position_ of elements.

### Prefixes
By default, responsive breakpoint based class names are generated for you. If you would like to generate non-responsive breakpoint class names, set the variable `$include-responsive-position` to `false`. If you do this, the only position prefix will be `.pos--`, otherwise you will have the following:

- `.pos--xs--`: Affects position on screens **0px** wide and up
- `.pos--sm--`: Affects position on screens **544px** wide and up
- `.pos--md--`: Affects position on screens **769px** wide and up
- `.pos--lg--`: Affects position on screens **992px** wide and up
- `.pos--xl--`: Affects position on screens **1200px** wide and up

### Suffixes
The _suffixes_ are the values you can append to the end of the _position_ prefixes (i.e., `.pos--xs--rel`), to impact the position of the element. Unless you edit the corresponding _alias_ variable values, your options will be named the following:

- `abs`: Absolutely positions the element
- `rel`: Relatively positions the element
- `l`: Positions the element on the **left**
- `r`: Positions the element on the **right**
- `t`: Positions the element on the **top**
- `b`: Positions the element on the **bottom**
- `tl`: Positions the element on the **top left**
- `tr`: Positions the element on the **top right**
- `bl`: Positions the element on the **bottom left**
- `br`: Positions the element on the **bottomr right**

### Examples

```html
  <div class="pos--xl--abs pos--xl--tl">
    Will positioned in the top left on screens 1200px wide and greater
  </div>
  <div class="pos--xs--abs pos--xl--rel">
    Will be absolutely positioned up to 1200px, from there it will be relatively positioned
  </div>
  <div class="pos--xs--abs pos--xs--br">
    Will be absolutely positioned to the bottom right on all screens
  </div>
```

### Variables
The following are the variables that are used, along with their default values, which may be modified to your liking.

```scss
  // Position Variables
  $include-responsive-position: true;
  $position-params: $screen-params;

  // Position Aliases
  $position-alias: pos;
  $absolute-alias: abs;
  $relative-alias: rel;
  $left-alias: l;
  $right-alias: r;
  $top-alias: t;
  $bottom-alias: b;
```

## Pull

[(back to top)](#top)

These utilities allow you to controll the _float_ of elements.

### Prefixes
By default, responsive breakpoint based class names are generated for you. If you would like to generate non-responsive breakpoint class names, set the variable `$include-responsive-pull` to `false`. If you do this, the only pull prefix will be `.pull--`, otherwise you will have the following:

- `.pull--xs--`: Affects float on screens **0px** wide and up
- `.pull--sm--`: Affects float on screens **544px** wide and up
- `.pull--md--`: Affects float on screens **769px** wide and up
- `.pull--lg--`: Affects float on screens **992px** wide and up
- `.pull--xl--`: Affects float on screens **1200px** wide and up

### Suffixes
The _suffixes_ are the values you can append to the end of the _pull_ prefixes (i.e., `.pull--xs--none`), to impact the float of the element. Unless you edit the corresponding _alias_ variable values, your options will be named the following:

- `l`: Floats the element to the **left**
- `r`: Floats the element to the **right**
- `none`: Does not float the element

### Examples

```html
  <div class="pull--xl--r">
    Will only be floated right on screens 1200px wide and greater
  </div>
  <div class="pull--xs--l pull--xl--none">
    Will be floated left up to 1200px, from there it will have no float
  </div>
```

### Variables

```scss
  // Pull Variables
  $include-responsive-pull: true;
  $pull-params: $screen-params;

  // Pull Aliases
  $pull-alias: pull;
  $left-alias: l;   
  $right-alias: r;
  $none-alias: none;
```

## Text

[(back to top)](#top)

These utilities allow you to control _text_ styling.

### Prefixes
By default, responsive breakpoint based class names are generated for you. If you would like to generate non-responsive breakpoint class names, set the variable `$include-responsive-text` to `false`. If you do this, the only text prefix will be `.txt--`, otherwise you will have the following:

- `.txt--xs--`: Affects text on screens **0px** wide and up
- `.txt--sm--`: Affects text on screens **544px** wide and up
- `.txt--md--`: Affects text on screens **769px** wide and up
- `.txt--lg--`: Affects text on screens **992px** wide and up
- `.txt--xl--`: Affects text on screens **1200px** wide and up

### Suffixes
The _suffixes_ are the values you can append to the end of the _text_ prefixes (i.e., `.txt--xs--str`), to impact the text of the element. Unless you edit the corresponding _alias_ variable values, your options will be named the following:

- `sm`: Resizes the text as **small**
- `str`: Styles the text as **bold**
- `emp`: Styles the text as **italic**
- `eli`: Overflow text will be styled with **ellipsis**
- `l`: Aligns the text to the **left**
- `c`: Aligns the text to the **center**
- `r`: Aligns the text to the **right**

### Examples

```html
  <div class="txt--xs--emp txt--xl--eli">
    Text will be italic on all screens and have an ellipsis on screens larger than 1200px
  </div>
  <div class="txt--xs--l txt--xl--c">
    Text will be left aligned on screens up to 1200px, from there it will be center
  </div>
  <div class="txt--xs--sm">
    Text will be small on all screens
  </div>
```

### Variables
The following are the variables that are used, along with their default values, which may be modified to your liking.

```scss
  // Text Variables
  $include-responsive-text: true;
  $text-params: $screen-params;
  $small-size: 80%;

  // Text Aliases
  $text-alias: txt;
  $strong-alias: str;
  $italic-alias: emp;
  $ellipsis-alias: eli;
  $small-alias: sm;
  $left-alias: l;
  $right-alias: r;
  $center-alias: c;
```

## Creator

**Kris Van Houten**
- <http://krivaten.com>
- <https://twitter.com/krivaten>

## Copyright and license

Code and documentation copyright 2016 Kris Van Houten. Code released under the MIT license.
