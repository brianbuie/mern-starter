import HomeIcon from '../../public/img/home.svg';

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
  </Container>
);

export default Home;
