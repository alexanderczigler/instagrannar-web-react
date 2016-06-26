### SCSS framework

#### Class names
Class name should follow [BEM-formatting](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/).

Whenever possible use DRY CSS principles.

Watch out for any [code smells](http://csswizardry.com/2012/11/code-smells-in-css/). Please take the time to go back
and refactor CSS if you feel that it can be improved.

#### Selector sorting
A class should be formatted with scoped variables first, followed
by any mixins/extends and finally regular properties and values.
All three categories should be placed in alphabetical order.
One space after each property.

##### Example
    .partial-name__element {
        $scoped-variable: var;
        
        @import mixins();
        
        property: value;
    }

#### Plugins
* SCSS-Lint - Ensures that the SCSS files follow the correct syntaxing
* Autoprefixer - Removes or adds any necessary browser prefixes (which browsers are defined in task runner)

#### Folders
* modules/ - mixins, variables and utilities (such as icons)
* patterns/ - global styles. Buttons, forms, tables etc.
* components/ - groups of patterns with small bits of layout
* layouts/ - page layouts and page-specific changes to patterns/components

##### Added when needed
* vendor/ - is for CSS related libraries
