import { Box } from '@chakra-ui/react'

import { Product } from '@/types/product'

type SideCartPropsType = {
  products: Product[]
}

export const SideCart = ({ products }: SideCartPropsType) => {
  return (
    <Box px={6} w={'xs'} borderLeftWidth={2}>
      {products.map((product) => (
        <Box key={product.id}>{product.productName}</Box>
      ))}
    </Box>
  )
}
