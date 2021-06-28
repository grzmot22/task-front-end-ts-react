import { useApolloClient, useQuery } from '@apollo/client';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Emoji from '../components/Emoji';
import Loading from '../components/Loading';
import { GET_CONTINENT_COUNTRIES } from '../gql/continent.gql';
import {
  GetContinentCountries,
  GetContinentCountriesVariables,
} from '../gql/types/GetContinentCountries';

type TParams = { code: string };

const ListContinentCountries = ({ match }: RouteComponentProps<TParams>) => {
  const client = useApolloClient();
  const { data, loading, error } = useQuery<
    GetContinentCountries,
    GetContinentCountriesVariables
  >(GET_CONTINENT_COUNTRIES, {
    client,
    variables: { code: match.params.code },
  });

  if (loading || error) {
    return error ? <p>error.message </p> : <Loading />;
  }

  return (
    <div>
      {match.params.code}
      <div>
        {data &&
          data.continent &&
          data.continent.countries.length > 0 &&
          data.continent.countries.map((country) => (
            <ol key={country.name}>
              {country.name}
              <Emoji
                key={country.name}
                label={country.name}
                symbol={country.emoji}
              />
              {country.languages && country.languages.length > 0 && (
                <div>{country.languages[0].name}</div>
              )}
            </ol>
          ))}
      </div>
    </div>
  );
};

export default ListContinentCountries;
