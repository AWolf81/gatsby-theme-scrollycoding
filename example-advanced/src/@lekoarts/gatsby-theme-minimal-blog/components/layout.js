import React from 'react'
import BlogLayout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout'
import { ScrollycodingContextProviderComponent } from '@awolf81/gatsby-theme-scrollycoding/src/context'

const classes = {
  'ch-hike-step-content-unfocused': 'opacity-25 transition-opacity',
  'ch-hike-step-content': 'border-none',
  'ch-frame-button': 'bg-gray-300 border-gray-600'
}

const previewProps = {
  preset: {
    customSetup: {
      dependencies: {
        'react-svg-curve': '0.2.0'
      }
    }
  }
}

// codeProps is optional --> defaults to minColumns: 40
const codeProps = {
  minColumns: 40
}

// override scrollycoding components or add new components
// --> not possible as out context is below the MDX provider
// const customComponents = {
//   Hello
// }
export default function Layout({ children, ...props }) {
  return (
    <ScrollycodingContextProviderComponent
      classes={classes}
      codeProps={codeProps}
      previewProps={previewProps}
    >
      <BlogLayout {...props}>{children}</BlogLayout>
    </ScrollycodingContextProviderComponent>
  )
}
