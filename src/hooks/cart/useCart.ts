import { useRecoilState } from 'recoil'

import { productList } from '@/constants/product/productList'

import { cartsState } from '@/stores/atoms/cartState'

export const useCart = () => {
  const [cart, setCart] = useRecoilState(cartsState)

  // 商品一覧から指定された商品IDの商品を取り出す
  const _findProductItem = (productId: number) =>
    productList.find((productItem) => productItem.id === productId)

  // カート一覧からしていされた商品IDの商品を取り出す
  const _findCartItem = (productId: number) => cart.find((cartItem) => cartItem.id === productId)

  // カートに追加
  const addCartItem = (productId: number) => {
    const selectedProduct = _findProductItem(productId)
    if (!selectedProduct) return

    // カート内に追加しようとしている商品が既にあるかどうか
    const hasSelectedProductInCart = _findCartItem(productId)

    if (!hasSelectedProductInCart) {
      // まだカート内になければカウントを1にしてそのまま追加
      setCart((prev) => {
        return [...prev, { ...selectedProduct, count: 1 }]
      })
    } else {
      // すでにカートにある場合はカウントを1増やす
      setCart((prev) => {
        return prev.map((cartItem) => {
          if (cartItem.id !== productId) return cartItem

          return { ...cartItem, count: cartItem.count + 1 }
        })
      })
    }
  }

  // カートから取り除く
  const removeCartItem = (productId: number) => {
    const _cart = cart.map((cartItem) => {
      if (cartItem.id !== productId) return cartItem
      if (cartItem.count === 0) return cartItem

      return { ...cartItem, count: cartItem.count - 1 }
    })

    // countが0の商品を取り除いたものを返す
    setCart(() => _cart.filter((cartItem) => cartItem.count !== 0))
  }

  return { addCartItem, removeCartItem }
}
