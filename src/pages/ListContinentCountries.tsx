import { useApolloClient, useQuery } from '@apollo/client';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
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
    <>
      <Container>
        <Title>{data && data.continent && data.continent.name}</Title>
        {data &&
          data.continent &&
          data.continent.countries.length > 0 &&
          data.continent.countries.map((country) => (
            <ItemContainer key={country.name}>
              <CountryName>Country: {country.name}</CountryName>
              {country.languages && country.languages.length > 0 && (
                <CountryLanguage>
                  Language: {country.languages[0].name}
                </CountryLanguage>
              )}
              <CountryEmoji
                key={country.name}
                label={country.name}
                symbol={country.emoji}
              />
            </ItemContainer>
          ))}
      </Container>
    </>
  );
};

export default ListContinentCountries;

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
  grid-template-areas:
    'title title title title'
    'content content content content';
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      'title'
      'content'
      'footer';
  }
`;

const Title = styled.title`
  display: grid;
  font-weight: bold;
  font-size: xxx-large;
  grid-area: title;
`;

const ItemContainer = styled.div`
  background: #634fda66;
  padding: 1.5rem;
  border-radius: 1rem;
`;

const CountryName = styled.div``;
const CountryLanguage = styled.div``;
const CountryEmoji = styled(Emoji)``;
