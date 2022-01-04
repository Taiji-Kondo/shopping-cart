import { VFC } from 'react'

type HeaderPropsType = {
  header?: void
}

export const Header: VFC<HeaderPropsType> = () => {
  return (
    <>
      <header>header</header>
    </>
  )
}
