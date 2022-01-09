import { Box, HStack, StackDivider, Text, VStack } from '@chakra-ui/react'

import { useCart } from '@/hooks'
import { cartStateType } from '@/stores/atoms/cartState'

type SideCartPropsType = {
  cart: cartStateType[]
}

export const SideCart = ({ cart }: SideCartPropsType) => {
  const { cartTotalPrice } = useCart()

  return (
    <Box px={6} borderLeftWidth={2} w="100%">
      <VStack align="stretch" spacing={2} divider={<StackDivider borderColor="gray" />}>
        <Box>
          {cart.map((cartItem) => (
            <HStack spacing={2} key={cartItem.id}>
              <Text fontWeight={'bold'}>{cartItem.productName}</Text>
              <Text>×{cartItem.count}</Text>
            </HStack>
          ))}
        </Box>
        <Text fontWeight="bold">¥{cartTotalPrice}</Text>
      </VStack>
    </Box>
  )
}
