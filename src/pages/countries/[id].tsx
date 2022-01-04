import { Box, Container, Link as ChakraLink } from '@chakra-ui/react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { CountryItem } from '@/components/country/CountryItem'

type PostPageProps = {
  code: string
}

const PostPage: NextPage<PostPageProps> = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Container maxW="container.lg">
      <Box my={10}>
        <h1 className="text-40 font-bold">Detail</h1>
      </Box>
      <CountryItem codeName={id as string} />
      <Box mt={10} mb={2}>
        <hr />
      </Box>
      <Link href="/countries">
        <ChakraLink color="blue">Go back</ChakraLink>
      </Link>
    </Container>
  )
}

export default PostPage
