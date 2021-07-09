# CSS Position: Absolute / Relative

1. Absolute takes things out of flow on the document.

1. Absolute will look for the nearest `relative` in order to work. If none found, the root i.e. `body` element will be used.

1. Absolute is commonly used with `top`, `bottom`, `left` and `right` properties.

   ```css
   div {
     position: absolute;
     top: 0;
     left: 0;
   }
   ```

   1. This will position the div 0 pixels away from top and 0 pixels away from the left.
   1. The div will be positioned top-left of the screen.
   1. The nearest relative position will be the body element.

1. Z-index sets the z-order of positioned elements.

   1. Low z-index, will mean a higher z-index will overlap this.
   1. Negative values have low priority. These increase in priority with higher values.

1. For a z-index to work it must have a position property other than static.
