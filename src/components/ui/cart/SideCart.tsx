import { Box, HStack, Text } from '@chakra-ui/react'

import { cartStateType } from '@/stores/atoms/cartState'

type SideCartPropsType = {
  cart: cartStateType[]
}

export const SideCart = ({ cart }: SideCartPropsType) => {
  return (
    <Box px={6} borderLeftWidth={2}>
      {cart.map((cartItem) => (
        <HStack spacing={2} key={cartItem.id}>
          <Text fontWeight={'bold'}>{cartItem.productName}</Text>
          <Text>×{cartItem.count}</Text>
        </HStack>
      ))}
    </Box>
  )
}
