import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useQuery } from '@apollo/client';
import { GET_CONTINENTS } from '../gql/continents.gql';
import {
  GetContinents,
  GetContinents_continents,
} from '../gql/types/GetContinents';
import Loading from '../components/Loading';

const ListContinentsPage = () => {
  const { data, loading, error } = useQuery<
    GetContinents,
    GetContinents_continents
  >(GET_CONTINENTS);

  if (loading || error) {
    return error ? <p>{error.message} </p> : <Loading />;
  }

  return (
    <Container>
      {data &&
        data.continents.length > 0 &&
        data.continents.map((continent) => (
          <StyledLink key={continent.code} to={`/continents/${continent.code}`}>
            {`${continent.name} ${continent.code}`}
          </StyledLink>
        ))}
    </Container>
  );
};

export default ListContinentsPage;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  overflow-wrap: anywhere;
  background: red;
  opacity: 0.8;
  padding: 5px;
  width: 200px;
  height: 150px;
  margin-top: 10px;
  line-height: 150px;
  font-weight: bold;
  color: black;
  text-align: center;
  text-decoration: none;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  @media (max-width: 1000px) {
    line-height: 50px;
  }
`;
