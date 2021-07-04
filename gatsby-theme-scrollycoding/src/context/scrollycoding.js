import React, { createContext, useState } from 'react'

const initialClasses = {}
const initialComponents = {}
const initialCodeProps = {
  minColumns: 40
}
const initialPreviewProps = {}

export const ScrollycodingContext = createContext({
  classes: initialClasses,
  components: initialComponents,
  codeProps: initialCodeProps,
  previewProps: initialPreviewProps,
  setClasses: () => {}
})

export const ScrollycodingContextProviderComponent = ({
  children,
  classes: defaultClasses,
  codeProps,
  components: defaultComponents,
  previewProps
}) => {
  const [classes, setClasses] = useState(defaultClasses || initialClasses)
  const [components, setComponents] = useState(
    defaultComponents || initialComponents
  )
  // Note: components, codeProps, previewProps not changeable during runtime --> just classes

  return (
    <ScrollycodingContext.Provider
      value={{ classes, setClasses, components, codeProps, previewProps }}
    >
      {children}
    </ScrollycodingContext.Provider>
  )
}

// ScrollycodingContextProviderComponent.defaultProps = {
//   classes: initialClasses,
//   components: initialComponents,
//   codeProps: initialCodeProps,
//   previewProps: initialPreviewProps
// }
