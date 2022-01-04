import { useQuery } from '@apollo/client'
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { NextPage } from 'next'

import { COUNTRY_QUERY, CountryData } from '@/repositories/graphql/queries/country/country.query'

type PostItemPropsType = {
  codeName: string
}

export const CountryItem: NextPage<PostItemPropsType> = ({ codeName }) => {
  const { loading, error, data } = useQuery<CountryData>(COUNTRY_QUERY, {
    variables: { code: codeName },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {JSON.stringify(error)}</p>

  if (!data) return null
  const { country } = data
  if (!country) return null

  const { name, code, phone, emoji } = country

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Country Name</Th>
          <Th>Country Code</Th>
          <Th>Phone</Th>
          <Th>Emoji</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{name}</Td>
          <Td>{code}</Td>
          <Td>{phone}</Td>
          <Td>{emoji}</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}
