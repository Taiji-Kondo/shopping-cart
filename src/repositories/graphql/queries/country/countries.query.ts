import { gql } from '@apollo/client'

import { BASE_COUNTRY_FIELD } from '@/repositories/graphql/queries/country/baseCountryField.query'

export const COUNTRIES_QUERY = gql`
  ${BASE_COUNTRY_FIELD}
  query GetCountries {
    countries {
      ...BaseCountryField
    }
  }
`

export type CountryData = {
  countries: CountryParamsType[]
}
