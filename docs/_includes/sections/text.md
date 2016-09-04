
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

{% highlight html %}
  <div class="txt--xs--emp txt--xl--eli">
    Text will be italic on all screens and have an ellipsis on screens larger than 1200px
  </div>
  <div class="txt--xs--l txt--xl--c">
    Text will be left aligned on screens up to 1200px, from there it will be center
  </div>
  <div class="txt--xs--sm">
    Text will be small on all screens
  </div>
{% endhighlight %}

### Variables
The following are the variables that are used, along with their default values, which may be modified to your liking.

{% highlight scss %}
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
{% endhighlight %}
