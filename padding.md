---
layout: default
---

## Padding

Within **Custility**, you can have consistent control over the padding you add to elements.

### Prefixes
By default, there are six padding prefixes that determine the size of the padding to be added. While the names and sizes can be changed by overriding the `$padding-params` variable, out of the box they are the the following:

- `.pad--0--`: Removes all padding
- `.pad--xs--`: Adds a padding of **16px**
- `.pad--sm--`: Adds a padding of **32px**
- `.pad--md--`: Adds a padding of **48px**
- `.pad--lg--`: Adds a padding of **64px**
- `.pad--xl--`: Adds a padding of **80px**

### Actions
The _suffixes_ that can be added to the padding class give you a lot of flexibility as to where and how padding will be applied. Unless you edit the corresponding _alias_ variable values, your options will be named the following:

- `t`: Adds padding to the **top**
- `b`: Adds padding to the **bottom**
- `l`: Adds padding to the **left**
- `r`: Adds padding to the **right**
- `x`: Adds padding to the **x-axis**
- `y`: Adds padding to the **y-axis**

### Examples

{% highlight html %}
  <div class="pad--x--y pad--xl--x">
    Will have no padding on the y-axis but 80px padding on the x-axis
  </div>
  <div class="pad--xs--t pad--md--r">
    Will have 16px padding on the top and 32px padding on the right
  </div>
  <div class="pad--lg--b">
    Will have 64px padding on the bottom
  </div>
{% endhighlight %}

### Variables
The following are the variables that are used, along with their default values, which may be modified to your liking.

{% highlight scss %}
  //Padding Variables
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
{% endhighlight %}
