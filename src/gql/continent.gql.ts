import { gql } from '@apollo/client';
export const GET_CONTINENT_COUNTRIES = gql`
  query GetContinentCountries {
    continent(code: "EU") {
      code
      name
      countries {
        name
        emoji
      }
    }
  }
`;
