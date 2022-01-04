import { ReactNode, VFC } from 'react'

import { Footer } from '@/layouts/footer/Footer'
import { Header } from '@/layouts/header/Header'

type BaseLayoutPropsType = {
  layout?: void
  children: ReactNode
}

export const BaseLayout: VFC<BaseLayoutPropsType> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
