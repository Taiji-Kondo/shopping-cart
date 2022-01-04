import { VFC } from 'react'

import styles from '@/styles/Home.module.css'

type FooterPropsType = {
  footer?: void
}

export const Footer: VFC<FooterPropsType> = () => {
  return (
    <>
      <footer className={styles.footer}>footer</footer>
    </>
  )
}
