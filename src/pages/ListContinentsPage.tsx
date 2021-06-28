import React from 'react';
import { Link } from 'react-router-dom';
import { useApolloClient, useQuery } from '@apollo/client';
import { GET_CONTINENTS } from '../gql/continents.gql';
import {
  GetContinents,
  GetContinents_continents,
} from '../gql/types/GetContinents';
import Loading from '../components/Loading';

const ListContinentsPage = () => {
  const client = useApolloClient();
  const { data, loading, error } = useQuery<
    GetContinents,
    GetContinents_continents
  >(GET_CONTINENTS, { client });

  if (loading || error) {
    return error ? <p>error.message </p> : <Loading />;
  }

  return (
    <div>
      {data &&
        data.continents.length > 0 &&
        data.continents.map((continent) => (
          <Link key={continent.code} to={`/continents/${continent.code}`}>
            {continent.name}
          </Link>
        ))}
    </div>
  );
};

export default ListContinentsPage;
