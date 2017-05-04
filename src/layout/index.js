import React from 'react'

export default function Layout({ children }) {
  return (
    <div>
      <main id="content">{children}</main>
    </div>
  )
}

Layout.displayName = 'Layout'
