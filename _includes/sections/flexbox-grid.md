
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

{% highlight html %}
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
{% endhighlight %}

### Variables
The following are the variables that are used, along with their default values, which may be modified to your liking.

{% highlight scss %}
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
{% endhighlight %}
