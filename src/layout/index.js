import React from 'react'
import Nav from '../nav'

export default function Layout({ children }) {
  return (
    <div>
      <main id="content">{children}</main>
    </div>
  )
}

Layout.displayName = 'Layout'
