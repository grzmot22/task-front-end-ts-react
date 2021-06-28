import { gql } from '@apollo/client';
export const GET_CONTINENT_COUNTRIES = gql`
  query GetContinentCountries($code: ID!) {
    continent(code: $code) {
      code
      name
      countries {
        name
        emoji
      }
    }
  }
`;
