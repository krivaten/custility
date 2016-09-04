
## Pull

[(back to top)](#top)

These utilities allow you to controll the _float_ of elements. A pretty small but still useful module.

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

{% highlight html %}
  <div class="pull--xl--r">
    Will only be floated right on screens 1200px wide and greater
  </div>
  <div class="pull--xs--l pull--xl--none">
    Will be floated left up to 1200px, from there it will have no float
  </div>
{% endhighlight %}

### Variables

{% highlight scss %}
  // Pull Variables
  $include-responsive-pull: true;
  $pull-params: $screen-params;

  // Pull Aliases
  $pull-alias: pull;
  $left-alias: l;   
  $right-alias: r;
  $none-alias: none;
{% endhighlight %}
