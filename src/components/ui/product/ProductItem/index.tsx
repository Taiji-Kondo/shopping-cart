import { Box, Button, HStack, Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'
import React from 'react'

import { useCartFpTs } from '@/hooks/cart/useCartFpTs'

import { Product } from '@/types/product'

type ProductItemPropsType = Product

export const ProductItem = ({ id, productName, price, description }: ProductItemPropsType) => {
  // const { addCartItem, removeCartItem } = useCart()
  const { addCartItem, removeCartItem } = useCartFpTs()

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
