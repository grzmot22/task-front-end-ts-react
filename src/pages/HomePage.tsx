import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomePage = () => (
  <Container>
    <Button to="/continents/">Continents</Button>
  </Container>
);

export default HomePage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const Button = styled(Link)`
  background: #634fda66;
  opacity: 0.8;
  border-radius: 1rem;
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
`;
