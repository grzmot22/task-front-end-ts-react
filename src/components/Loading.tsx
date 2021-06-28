import React from 'react';
import styled from 'styled-components';

const Loading = () => (
  <Loader>
    <Image src="/images/loader.gif" />
  </Loader>
);

export default Loading;

const Loader = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const Image = styled.img`
  height: 6rem;
  width: 6rem;
`;
