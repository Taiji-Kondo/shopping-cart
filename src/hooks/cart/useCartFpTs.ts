import { filter, findFirst, map, reduce } from 'fp-ts/Array'
import { pipe } from 'fp-ts/function'
import { isNone } from 'fp-ts/Option'
import { useRecoilState } from 'recoil'

import { productList } from '@/constants/product/productList'

import { Product } from '@/types/product'

import { cartsState, cartStateType } from '@/stores/atoms/cartState'

export const useCartFpTs = () => {
  const [cart, setCart] = useRecoilState(cartsState)

  // 商品一覧またはカート一覧から指定された商品IDの商品を取り出す
  const _findSelectedIdItem = (selectedId: number) => (item: Product | cartStateType) =>
    item.id === selectedId

  // カートに追加
  const addCartItem = (productId: number) => {
    const selectedProduct = findFirst(_findSelectedIdItem(productId))(productList)
    if (isNone(selectedProduct)) return

    // カート内に追加しようとしている商品が既にあるかどうか
    const hasSelectedProductInCart = findFirst(_findSelectedIdItem(productId))(cart)

    if (isNone(hasSelectedProductInCart)) {
      // まだカート内になければカウントを1にしてそのまま追加
      setCart((prev) => {
        return [...prev, { ...selectedProduct.value, count: 1 }]
      })
    } else {
      // すでにカートにある場合はカウントを1増やす
      setCart(
        map((cartItem: cartStateType) => {
          if (cartItem.id !== productId) return cartItem

          return { ...cartItem, count: cartItem.count + 1 }
        })
      )
    }
  }

  // カートから取り除く
  const removeCartItem = (productId: number) => {
    const _cart = pipe(
      cart,
      map((cartItem) => {
        if (cartItem.id !== productId) return cartItem
        if (cartItem.count === 0) return cartItem

        return { ...cartItem, count: cartItem.count - 1 }
      }),
      filter((cartItem) => cartItem.count !== 0)
    )
    setCart(_cart)
  }

  // カートの合計金額
  const cartTotalPrice = reduce(
    0,
    (prev, cartItem: cartStateType) => prev + cartItem.price * cartItem.count
  )(cart)

  return { addCartItem, removeCartItem, cartTotalPrice }
}
