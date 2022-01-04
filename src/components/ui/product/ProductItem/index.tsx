import { Box, Button, HStack, Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'
import React from 'react'

import { Product } from '@/types/product'

type ProductItemPropsType = Product

export const ProductItem = ({ id, productName, price, description }: ProductItemPropsType) => {
  console.log(id)

  const onClickAdd = () => {
    console.log('add')
  }
  const onClickDelete = () => {
    console.log('delete')
  }

  return (
    <Box borderRadius={'md'} borderWidth={2} px={5} py={4} w={'sm'}>
      <Stat>
        <StatLabel>{productName}</StatLabel>
        <StatNumber>¥{price}</StatNumber>
        <StatHelpText>{description}</StatHelpText>
      </Stat>
      <HStack spacing="3">
        <Button bg="blue.300" onClick={onClickAdd}>
          追加
        </Button>
        <Button bg="red.300" onClick={onClickDelete}>
          削除
        </Button>
      </HStack>
    </Box>
  )
}
