import { atom } from 'recoil'

import { Product } from '@/types/product'

import { RecoilAtomKeys } from '../RecoilAtomKeys'

export type cartStateType = Product & {
  count: number
}

export const cartsState = atom<cartStateType[]>({
  key: RecoilAtomKeys.CART_STATE,
  default: [],
})
