import { useQuery } from '@apollo/client'
import { Table, Thead, Tbody, Tr, Th, Td, Link as ChakraLink } from '@chakra-ui/react'
import { NextPage } from 'next'
import Link from 'next/link'

import {
  COUNTRIES_QUERY,
  CountryData,
} from '@/repositories/graphql/queries/country/countries.query'

export const CountryList: NextPage = () => {
  const { loading, error, data } = useQuery<CountryData>(COUNTRIES_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {JSON.stringify(error)}</p>

  if (!data) return null
  const { countries } = data
  if (!countries) return null

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Country Name</Th>
          <Th>Country Code</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {countries.map(({ code, name }) => {
          return (
            <Tr key={code}>
              <Td>{name}</Td>
              <Td>{code}</Td>
              <Td>
                <Link href={`/countries/${code}`}>
                  <ChakraLink color="blue">Show Detail</ChakraLink>
                </Link>
              </Td>
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}
