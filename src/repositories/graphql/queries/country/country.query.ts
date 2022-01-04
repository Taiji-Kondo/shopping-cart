import { gql } from '@apollo/client'

import { BASE_COUNTRY_FIELD } from '@/repositories/graphql/queries/country/baseCountryField.query'

export const COUNTRY_QUERY = gql`
  ${BASE_COUNTRY_FIELD}
  query GetCountry($code: ID!) {
    country(code: $code) {
      ...BaseCountryField
      phone
      emoji
    }
  }
`

export type CountryData = {
  country: Required<CountryParamsType>
}
