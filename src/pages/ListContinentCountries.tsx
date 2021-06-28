import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type TParams = { code: string };

const ListContinentCountries = ({ match }: RouteComponentProps<TParams>) => {
  return <div>ListContinentCountries {match.params.code}</div>;
};

export default ListContinentCountries;
