import React from 'react';
import styled from 'styled-components';
import HomeIcon from '../assets/home.svg';

const Headline = styled.h1`
  font-family: sans-serif;
`;

const Container = styled.div`
  padding: 3rem;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
`;

const Home = () => (
  <Container>
    <HomeIcon />
    <Headline>Welcome</Headline>
  </Container>
);

export default Home;
