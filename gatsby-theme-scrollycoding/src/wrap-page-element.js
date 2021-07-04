import React, { useContext } from 'react'
import { MDXProvider } from '@mdx-js/react'
// import { ScrollycodingContext } from './context'

import '@code-hike/scrollycoding/dist/index.css'

import { components as scrollycodingComponents } from './components/mdx' // component = shortcodes available in MDX

export const wrapPageElement = ({ element, ...props }, pluginOptions) => {
  // const { components } = useContext(ScrollycodingContext)
  console.log(props)
  return (
    <MDXProvider
      components={{
        ...scrollycodingComponents
      }}
    >
      {element}
    </MDXProvider>
  )
}
