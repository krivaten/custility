
## Display

[(back to top)](#top)

These utilities allow you to control the _display_ of elements, and are very simple to use.

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

{% highlight html %}
  <div class="dsp--xs--none dsp--xl--blk">
    Will only be visible on screens 1200px wide and greater
  </div>
  <div class="dsp--xs--inl-blk dsp--xl--none">
    Will be an inline block up to 1200px, from there it will be hidden
  </div>
  <div class="dsp--xs--sb">
    Will use flexbox's `space-between` feature on all screen sizes
  </div>
{% endhighlight %}

### Variables
The following are the variables that are used, along with their default values, which may be modified to your liking.

{% highlight scss %}
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
{% endhighlight %}