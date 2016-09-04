
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

{% highlight html %}
  <div class="pos--xl--abs pos--xl--tl">
    Will positioned in the top left on screens 1200px wide and greater
  </div>
  <div class="pos--xs--abs pos--xl--rel">
    Will be absolutely positioned up to 1200px, from there it will be relatively positioned
  </div>
  <div class="pos--xs--abs pos--xs--br">
    Will be absolutely positioned to the bottom right on all screens
  </div>
{% endhighlight %}

### Variables
The following are the variables that are used, along with their default values, which may be modified to your liking.

{% highlight scss %}
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
{% endhighlight %}
