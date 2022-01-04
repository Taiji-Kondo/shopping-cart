import { gql } from '@apollo/client'

export const BASE_COUNTRY_FIELD = gql`
  fragment BaseCountryField on Country {
    code
    name
  }
`
