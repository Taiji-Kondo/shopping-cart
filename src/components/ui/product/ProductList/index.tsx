import { Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'

import { Product } from '@/types/product'

type ProductListPropsType = Product

export const ProductItem = ({ id, productName, price, description }: ProductListPropsType) => {
  console.log(id)
  return (
    <Stat>
      <StatLabel>{productName}</StatLabel>
      <StatNumber>¥{price}</StatNumber>
      <StatHelpText>{description}</StatHelpText>
    </Stat>
  )
}
