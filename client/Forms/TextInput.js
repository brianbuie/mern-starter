const Input = styled.input`
  display: block;
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.2rem;
  margin: 0.3rem 0;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.25);
  padding: 0.6rem 0.8rem;
  outline: none;
  border: ${props => (props.error ? '1px solid red' : 'none')};
  border-radius: 0.3rem;
`;

const Label = styled.label`
  display: block;
  text-align: left;
  font-size: 0.9rem;
  padding-left: 0.8rem;
  transform: ${props => (props.show ? 'translateY(0)' : 'translateY(25%)')};
  opacity: ${props => (props.show ? '1' : '0')};
  transition: all 0.2s ease-in-out;
`;

const Feedback = styled.p`
  font-size: 0.8rem;
  color: red;
  margin-top: 0;
  text-align: left;
  padding-left: 0.8rem;
  max-height: ${props => (props.show ? '2rem' : '0')};
  transition: all 0.2s ease-in-out;
`;

const TextInput = ({ type, name, value, label, error, onChange }) => (
  <React.Fragment>
    <Label show={value} htmlFor={name}>
      {label}
    </Label>
    <Input {...{ type, name, value, onChange, error }} placeholder={label} />
    <Feedback show={error}>{error}</Feedback>
  </React.Fragment>
);

export default TextInput;
