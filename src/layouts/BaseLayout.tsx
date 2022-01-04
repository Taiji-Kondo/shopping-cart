import { VFC } from 'react'

import { Footer } from '@/layouts/footer/Footer'
import { Header } from '@/layouts/header/Header'

import { ChildrenType } from '@/types/Children'

import styles from '@/styles/Home.module.css'

type BaseLayoutPropsType = {
  layout?: void
} & ChildrenType

export const BaseLayout: VFC<BaseLayoutPropsType> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  )
}
