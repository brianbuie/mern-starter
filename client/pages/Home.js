import HomeIcon from '../../public/img/home.svg';
import Form from '@app/Forms/Form';

const Headline = styled.h1`
  color: ${theme.colors.primary};
  text-align: center;
`;

const Container = styled.div`
  padding: 3rem;
  max-width: 400px;
  margin: 0 auto;
`;

// prettier-ignore
const Home = () => (
  <Container>
    <HomeIcon />
    <Headline>Example Form</Headline>
    <Form
      fields={[
        { name: 'text', label: 'Text', type: 'text' },
        { name: 'checkity', label: 'Checkbox', type: 'checkbox', value: true},
        { name: 'radios', type: 'radio', value: 'option2', options: [
          { label: 'option 1', value: 'option1' },
          { label: 'option 2', value: 'option2' }
        ] },
        { name: 'select', type: 'select', label: 'Select an Option', options: [
          { label: 'option 1', value: 'option1' },
          { label: 'option 2', value: 'option2' }
        ] }
      ]}
      submit={data => !console.log(data) && ({ 
        ok: false, 
        data: { 
          fields: Object.keys(data).map(name => ({ name, message: 'example error' }))
        }
      })}
    />
  </Container>
);

export default Home;
