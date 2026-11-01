// https://vike.dev/onRenderClient
export { onRenderClient }

import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { Layout } from './Layout'

async function onRenderClient(pageContext) {
  // Repro: slow hydration (e.g. lazy-loaded code or data)
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const { Page } = pageContext
  hydrateRoot(
    document.getElementById('root'),
    <Layout>
      <Page />
    </Layout>,
  )
}
