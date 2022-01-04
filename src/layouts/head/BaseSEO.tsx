import { DefaultSeo } from 'next-seo'
import { VFC } from 'react'

import { SEO_CONFIG } from '@/constants'

export const BaseSEO: VFC = () => {
  return <DefaultSeo {...SEO_CONFIG} />
}
