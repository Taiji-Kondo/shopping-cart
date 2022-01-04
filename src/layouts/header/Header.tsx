import { VFC } from 'react'

import styles from '@/styles/Home.module.css'

type HeaderPropsType = {
  header?: void
}

export const Header: VFC<HeaderPropsType> = () => {
  return (
    <>
      <header className={styles.header}>header</header>
    </>
  )
}
