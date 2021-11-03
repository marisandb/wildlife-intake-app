import { gql } from '@apollo/client';

export const QUERY_EMPLOYEE = gql`
  {
    employee {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;