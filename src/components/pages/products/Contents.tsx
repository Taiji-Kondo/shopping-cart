import { Flex, Heading, VStack } from '@chakra-ui/react'

import { SideCart } from '@/components/ui/cart/SideCart'
import { ProductList } from '@/components/ui/product/ProductList'

import { productList } from '@/constants/product/productList'

export const ProductsContents = () => {
  return (
    <Flex height={'100vh'}>
      <VStack spacing={6} px={10} flex={1}>
        <Heading>商品一覧</Heading>
        <ProductList products={productList} />
      </VStack>
      <SideCart products={productList} />
    </Flex>
  )
}
