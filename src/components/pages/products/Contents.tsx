import { Flex, Heading, VStack } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'

import { SideCart } from '@/components/ui/cart/SideCart'
import { ProductList } from '@/components/ui/product/ProductList'

import { productList } from '@/constants/product/productList'

import { cartsState } from '@/stores/atoms/cartState'

export const ProductsContents = () => {
  const cart = useRecoilValue(cartsState)
  console.log(cart)

  return (
    <Flex height={'100vh'}>
      <VStack spacing={6} px={10} flex={1}>
        <Heading>商品一覧</Heading>
        <ProductList products={productList} />
      </VStack>
      {cart.length ? (
        <Flex w={'xs'}>
          <SideCart cart={cart} />
        </Flex>
      ) : null}
    </Flex>
  )
}
