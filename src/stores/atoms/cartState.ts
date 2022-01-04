import { atom } from 'recoil'

import { Product } from '@/types/product'

import { RecoilAtomKeys } from '../RecoilAtomKeys'

export const cartsState = atom<Product[]>({
  key: RecoilAtomKeys.CART_STATE,
  default: [],
})
