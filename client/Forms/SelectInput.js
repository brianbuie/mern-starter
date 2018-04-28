import FieldError from './FieldError';
import MagicLabel from './MagicLabel';

const Input = styled.select`
  display: block;
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.2rem;
  margin: 0.3rem 0;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.25);
  padding: 0.6rem 0.8rem;
  outline: none;
  border: ${props => (props.error ? '1px solid ' + theme.colors.error : 'none')};
  border-radius: ${theme.sizes.borderRadius};
`;

class SelectInput extends React.Component {
  onChange = e => {
    if (!this.props.onChange) return;
    this.props.onChange(this.props.name, e.target.value);
  };

  render = () => {
    const { name, value, label, error, options, placeHolder } = this.props;
    return (
      <React.Fragment>
        <MagicLabel show={value} htmlFor={name}>
          {label}
        </MagicLabel>
        <Input id={name} error={error} value={value} onChange={this.onChange}>
          <option value="" disabled>
            {label}
          </option>
          {options.map(option => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </Input>
        <FieldError show={error}>{error}</FieldError>
      </React.Fragment>
    );
  };
}

export default SelectInput;
