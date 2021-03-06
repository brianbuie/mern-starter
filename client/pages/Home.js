import HomeIcon from '@public/img/home.svg';
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

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Icon = styled(SVG)`
  svg {
    display: block;
    width: 5rem;
    height: 5rem;
    margin: 0 auto;
  }
`;

// prettier-ignore
const Home = () => (
  <Container>
    <Icon svg={HomeIcon} />
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
        ] },
        { name: 'date', type: 'date', label: 'Select a Date', value: 'default' },
        { name: 'longanswer', type: 'textarea', label: 'Write an Essay' }
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
