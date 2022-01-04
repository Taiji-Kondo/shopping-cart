import { HStack } from '@chakra-ui/react'

import { ProductItem } from '@/components/ui/product/ProductItem'

import { Product } from '@/types/product'

type ProductListPropsType = {
  products: Product[]
}

export const ProductList = ({ products }: ProductListPropsType) => {
  return (
    <HStack spacing="4">
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </HStack>
  )
}
