
## Margin

[(back to top)](#top)

Within **Custility**, you can have consistent control over the margin you add to elements.

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

{% highlight html %}
  <div class="mar--x--y mar--xl--x">
    Will have no margin on the y-axis but xl margin on the x-axis
  </div>
  <div class="mar--xs--t mar--md--r">
    Will have 16px margin on the top and md margin on the right
  </div>
  <div class="mar--lg--b">
    Will have lg margin on the bottom
  </div>
{% endhighlight %}

### Variables
The following are the variables that are used, along with their default values, which may be modified to your liking.

{% highlight scss %}
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
{% endhighlight %}
