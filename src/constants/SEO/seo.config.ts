// Document: https://github.com/garmeeh/next-seo

import { NextSeoProps } from 'next-seo'

export const SEO_CONFIG: NextSeoProps = {
  title: 'template',
  description: 'This example uses more of the available config options.',
  canonical: 'https://template.com',
  openGraph: {
    type: 'website',
    locale: 'ja_JA',
    url: 'https://template.com',
    site_name: 'template',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
}
