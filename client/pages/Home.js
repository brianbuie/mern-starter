import React from 'react';
import styled from 'styled-components';
import HomeIcon from '../../public/img/home.svg';
import { Account } from '@app/account/AccountContext';

const Headline = styled.h1`
  color: ${props => props.theme.primary};
`;

const Container = styled.div`
  padding: 3rem;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
`;

// prettier-ignore
const Home = () => (
  <Container>
    <HomeIcon />
    <Headline>Home</Headline>
    <Account.Consumer>
      {({ state }) => state.user && (
        <p>{state.user.displayName}</p>
      )}
    </Account.Consumer>
  </Container>
);

export default Home;
