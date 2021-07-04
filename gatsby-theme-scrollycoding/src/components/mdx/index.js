import React, { useContext } from 'react'

// import useConfig from '../../hooks/useConfig'
import CodeBlock from './code-block'
import CustomLink from './custom-link'
import {
  Hike as HikeSteps,
  Focus,
  CodeSlot,
  PreviewSlot,
  useMdxSteps,
  StepHead,
  withFocusHandler
} from '@code-hike/scrollycoding'
import { ScrollycodingContext } from '../../context'

function Hike({ children, previewProps, codeProps, ...props }) {
  const {
    classes,
    previewProps: previewPropsOption,
    codeProps: codePropsOption
  } = useContext(ScrollycodingContext)
  // const { scrollycodingConfig: themeOptions } = useConfig()
  // Note:
  // Gatbsy converts - from classes options to _ and we have to convert them back.
  // --> Is there another way to fix this as underscores in classes are not supported with this!!
  // console.log('themeOptions =', themeOptions)
  // const classes = covertClassesToHyphens(themeOptions.classes)
  // console.log('classes =', classes)

  const steps = useMdxSteps(
    children,
    {
      ...previewProps,
      ...previewPropsOption
    },
    {
      ...codeProps,
      ...codePropsOption
    }
  )
  return <HikeSteps steps={steps} {...props} classes={classes} />
}

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
