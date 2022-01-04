import { Box, Button, HStack, Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'
import React from 'react'
import { useRecoilState } from 'recoil'

import { productList } from '@/constants/product/productList'

import { Product } from '@/types/product'

import { cartsState } from '@/stores/atoms/cartState'

type ProductItemPropsType = Product

export const ProductItem = ({ id, productName, price, description }: ProductItemPropsType) => {
  const [cart, setCart] = useRecoilState(cartsState)

  // 商品一覧から指定された商品IDの商品を取り出す
  const findProductItem = (productId: number) =>
    productList.find((productItem) => productItem.id === productId)

  // カート一覧からしていされた商品IDの商品を取り出す
  const findCartItem = (productId: number) => cart.find((cartItem) => cartItem.id === productId)

  const addCartItem = (productId: number) => {
    const selectedProduct = findProductItem(productId)
    if (!selectedProduct) return

    // カート内に追加しようとしている商品が既にあるかどうか
    const hasSelectedProductInCart = findCartItem(productId)

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

  const removeCartItem = (productId: number) => {
    const _cart = cart.map((cartItem) => {
      if (cartItem.id !== productId) return cartItem
      if (cartItem.count === 0) return cartItem

      return { ...cartItem, count: cartItem.count - 1 }
    })

    // countが0の商品を取り除いたものを返す
    setCart(() => _cart.filter((cartItem) => cartItem.count !== 0))
  }

  const onClickAdd = (productId: number) => {
    addCartItem(productId)
  }

  const onClickDelete = (productId: number) => {
    removeCartItem(productId)
  }

  return (
    <Box borderRadius={'md'} borderWidth={2} px={5} py={4} maxW={'xs'}>
      <Stat>
        <StatLabel>{productName}</StatLabel>
        <StatNumber>¥{price}</StatNumber>
        <StatHelpText>{description}</StatHelpText>
      </Stat>
      <HStack spacing="3">
        <Button bg="blue.300" onClick={() => onClickAdd(id)}>
          追加
        </Button>
        <Button bg="red.300" onClick={() => onClickDelete(id)}>
          削除
        </Button>
      </HStack>
    </Box>
  )
}
