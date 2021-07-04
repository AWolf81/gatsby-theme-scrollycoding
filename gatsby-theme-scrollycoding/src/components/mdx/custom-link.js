import React from "react"
import { Link } from "gatsby"

export default function CustomLink({children, ...props}) {
    const href = props.href
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))
    const classes = 'text-blue-700'
    if (isInternalLink) {
      return (
        <Link href={href}>
          <a {...props} className={classes}>{children}</a>
        </Link>
      )
    }
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        {...props}
        className={classes}
      >{children}</a>
    )
  }