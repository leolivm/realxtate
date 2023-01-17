import { gql } from '@apollo/client'

export const FIND_ALL_RENTS_QUERY = gql`
  query {
    findAllRents {
      id
      title
      description
      image_url
      contact
      bedrooms
      bathrooms
      square_feets
      is_verified
      location
      latitude
      longitude
      monthly_cost
      cost
      rent
      currency
    }
  }
`
