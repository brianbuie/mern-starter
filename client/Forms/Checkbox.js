import FieldError from './FieldError';

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  margin: 1.25rem 0 0.3rem 0;
  display: flex;
  align-items: flex-end;
`;

const Box = styled.span`
  background: ${props => (props.value ? theme.colors.primary : 'white')};
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.25);
  border-radius: ${theme.sizes.borderRadius};
  width: 1.25rem;
  height: 1.25rem;
  margin: 0 0.8rem 0 0;
  transition: all 0.1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Checkmark = styled.span`
  width: 25%;
  height: 50%;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(45deg);
  transform-origin: center;
  opacity: ${props => (props.value ? 1 : 0)};
  transition: all 0.1s ease-in-out;
`;

class Checkbox extends React.Component {
  onChange = e => {
    if (!this.props.onChange) return;
    this.props.onChange(this.props.name, !this.props.value);
  };

  render = () => {
    const { name, label, error, value } = this.props;
    return (
      <React.Fragment>
        <Label>
          <Box value={value}>
            <Checkmark value={value} />
          </Box>
          <Input type="checkbox" onChange={this.onChange} checked={value} />
          {label}
        </Label>
        <FieldError show={error}>{error}</FieldError>
      </React.Fragment>
    );
  };
}

export default Checkbox;
