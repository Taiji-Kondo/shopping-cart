import { Heading } from '@chakra-ui/react'

import { ProductList } from '@/components/ui/product/ProductList'

import { productList } from '@/constants/product/productList'

export const ProductsContents = () => {
  return (
    <>
      <Heading>商品一覧</Heading>
      <ProductList products={productList} />
    </>
  )
}
