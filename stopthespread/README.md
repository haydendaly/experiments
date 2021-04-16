# ✋ Stop The Spread

## Installation

Ensure that you have an environment file `env.development` or `env.production`. You can find a example of the fields required for this in the `example.env.development` file. You cna find more information about environment files [here](https://www.gatsbyjs.org/docs/environment-variables/)

Then;

```
yarn
yarn develop
```

## Environment file

This file contains the `NODE_ENV` variable along with each country and whether it is enable or disabled. By default, and country defined within the `CountryDetails` class in `utils` will appear in the header, but to have the pages enabled

## Branches

- master - our production branch that appears live on the site
- staging - common branch for country specific teams to make pull requests into once they reach an appropriate point. You should be merging staging into your development branches regularly to avoid large numbers on conflicts when you create a PR back into this branch
- country_split_template - a template showing how country splits are currently being done, should be updated regularly

**NOTE: ensure your project builds `yarn build` before making a PR. Often your code will run fine in development but will fail on build**

## Styling/Syntax

### Base website and features

Attempt to follow the style guide which is laid out in `eslintrc.js` and `.prettierrc`. You can setup your editor to flag these or run `yarn lint` to show issues and `yarn format` to fix autofixable problems.

### Specific country content

Feel free to use whatever is comfortable, if you don't want to conform the styling laid out in the above files add exclusions in where necessary.

## Adding a new country

When adding a new country to the website, checkout the `country_split_template` branch in git (this branch should be kept up to date but contact @Evan Martin before doing this to ensure this is the case) and then branch off this with your own branch.

Within the `src/pages/` directory, there will be at least one completed country where a split has been made. Copy this folder and paste it back in `src/pages/` named with the 2 letter abbreviation for your country.

From there components within these pages will still point to the country you copied from. You will need to find all the relevant folders within `src/components` and again make a copy of these with the 2 letter country abbreviation (eg. copy the `src/components/imStruggling/ImStruggling/de` folder into `src/components/imStruggling/ImStruggling/{your_abbreviation_here}`). These components content can then be changed to reflect that advice/translations of your country.

The stylesheet will be located one level above the country specific component (eg `src/components/imStruggling/ImStruggling/imStruggling.module.scss`) and should be shared across all countries to keep the website theme somewhat consistent across countries. If you need to override or add any styles, create a new file within the country folder (eg `src/components/imStruggling/ImStruggling/de/imStrugglingOverride.module.scss`), define any rules and import it into the component alongside the base stylesheet as such;

```
import * as styles from "../imStruggling.module.scss"
import * as stylesOverride from "../imStrugglingOverride.module.scss"
```

The shared components requiring translations currently are the Header and Footer which require a few translations to be made. You will find these translations in the `src/utils/` folder which can be copied in a similar fashion to the components above.

After making these translations add your country to the `CountryDetails` class in `utils` and create an environment variable with your country enabled in the appropriate `.env` files.

**If at any point you are unsure what to do you will be able to find an example in an already implemented country, but if not please reach out.**

After completing your country specific branch open a PR into `staging` which can then be checked by the Cambridge team before being put live onto the site.

_This document is a work in progress and may not be exhaustive or may have errors. Please contact @Evan Martin if you have anything to add/correct._
