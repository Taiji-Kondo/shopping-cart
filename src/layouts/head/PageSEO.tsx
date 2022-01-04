import { NextSeo, NextSeoProps } from 'next-seo'
import { VFC } from 'react'

type PageSEOPropsType = {
  seo?: NextSeoProps
}

export const PageSEO: VFC<PageSEOPropsType> = ({ seo }) => {
  return <NextSeo {...seo} />
}
