/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetContinentCountries
// ====================================================

export interface GetContinentCountries_continent_countries_languages {
  __typename: 'Language';
  name: string | null;
}

export interface GetContinentCountries_continent_countries {
  __typename: 'Country';
  name: string;
  emoji: string;
  languages: GetContinentCountries_continent_countries_languages[];
}

export interface GetContinentCountries_continent {
  __typename: 'Continent';
  code: string;
  name: string;
  countries: GetContinentCountries_continent_countries[];
}

export interface GetContinentCountries {
  continent: GetContinentCountries_continent | null;
}

export interface GetContinentCountriesVariables {
  code: string;
}
