---
layout: default
---

## Display

Within **Custility**, you have an assortment of classes that change the display and appearance of elements.

### Prefixes
By default, responsive breakpoint based class names are generated for you. If you would like to generate non-responsive breakpoint class names, set the variable `$include-responsive-display` to `false`. If you do this, the only display prefix will be `.dsp--`, otherwise you will have the following:

- `.dsp--xs--`: Affects display of screens 0px wide and up
- `.dsp--sm--`: Affects display of screens 544px wide and up
- `.dsp--md--`: Affects display of screens 769px wide and up
- `.dsp--lg--`: Affects display of screens 992px wide and up
- `.dsp--xl--`: Affects display of screens 1200px wide and up

### Actions
The actions are the values you can append to the end of the _display_ prefixes (i.e., `.dsp--xs--none`), to impact the visility and appearance of the element. Unless you edit the corresponding _alias_ variable values, your options will be named the following:

- `none`: Hides the element
- `blk`: Displays the element as a block
- `inl`: Displays the element as inline
- `inl-blk`: Displays the element as an inline-block
- `sb`: Displays the element using flexbox and `space-between`
- `sa`: Displays the element using flexbox and `space-around`

### Examples

{% highlight html %}
  <div class="dsp--xs--none dsp--xl--blk">
    Will only be visible on screens 1200px wide and greater
  </div>
  <div class="dsp--xs--inline-block dsp--xl--none">
    Will be an inline block up to 1200px, where it will be hidden
  </div>
  <div class="dsp--xs--sb">
    Will use flexbox's `space-between` feature on all screens
  </div>
{% endhighlight %}

### Variables
The following are the variables that are used, along with their default values, which may be modified to your liking.

{% highlight scss %}
  //Display Variables
  $include-display: true;
  $include-responsive-display: true;
  $display-params: $screen-params;

  // Display Aliases
  $display-alias: dsp;
  $block-alias: blk;
  $inline-alias: inl;
  $none-alias: none;
  $space-between-alias: sb;
  $space-around-alias: sa;
{% endhighlight %}
