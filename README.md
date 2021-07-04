# What is it?
It's a Gatsby theme for [@code-hike/scrollycoding](https://www.npmjs.com/package/@code-hike/scrollycoding).

The theme is working but not release yet.

# Todos
- [ ] Check installation issue with smooshpack / react-smooshpack --> react-smooshpack beta version is the problem (where is it used?) alpha-31 required
- [ ] Add a minimal example
- [ ] Create a release (same version as @code-hike/scrollycoding) and publish on npm
- [ ] Add theme to blog & create a first post using it

# Installation
`yarn add @awolf81/gatsby-theme-scrollycoding` or `npm i @awolf81/gatsby-theme-scrollycoding` (**Not available yet**)

Add theme to `gatsby-config.js` like:
```js
{
      resolve: '@awolf81/gatsby-theme-scrollycoding',
      options: {
      }
}
```

# Usage
With-out options the Scrollycoding MDX components should be now correctly rendering your MDX files.

Import `import { ScrollycodingContextProviderComponent } from '@awolf81/gatsby-theme-scrollycoding/src/context'` into your Layout and wrap everything inside.

Pass `classes`, `codeProps` or `previewProps` to change the scrollycoding options.

## Classes
```
const classes = {
  'ch-hike-step-content-unfocused': 'opacity-25 transition-opacity',
}
This will add `opacity-25 transition-opacity` to unfocuse step content.

## codeProps
```
const codeProps = {
  minColumns: 40
}
```

## previewProps
Used to add dependencies
```
const previewProps = {
  preset: {
    customSetup: {
      dependencies: {
        'react-svg-curve': '0.2.0'
      }
    }
  }
}
```

## Changing / Adding MDX components passed to MDXProvider
Use component shadowing and add folder "src\@awolf81\gatsby-theme-scrollycoding\components\mdx". Create an index.js or .ts file with:
```
import React from 'react'
import { components as scrollycodingComponents } from '@awolf81/gatsby-theme-scrollycoding/src/components/mdx'

const Hello = () => <h1>Hello world</h1>

console.log('shadow')
export const components = {
  ...scrollycodingComponents,
  Hello
}
```
This will add the `Hello` component to the components used by the `MDXProvider`.

It's possible to extend the ScrollyComponents by using the same key. The following components are added:
```
export const components = {
  pre: CodeBlock,
  // Code Hike:
  a: withFocusHandler(CustomLink),
  Hike,
  Focus,
  StepHead,
  CodeSlot,
  PreviewSlot
}
```

## Theme options
No options.

# Development
Run `yarn install` then start example with `yarn start`.

Edit theme or example.

## Implentation details
`gatsby-browser.js` and `gatbsy-ssr.js` will use `wrapPageElement` to wrap the page with the `MDXProvider` that we'll create with our Scrollycoding components.