import { FieldError, MagicLabel } from './InputAddons';

const Input = styled.textarea`
  display: block;
  width: 100%;
  height: 6rem;
  font-size: 1rem;
  line-height: 1rem;
  margin: 0.3rem 0;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.25);
  padding: 0.6rem 0.8rem;
  outline: none;
  border: ${props => (props.error ? '1px solid ' + theme.colors.error : 'none')};
  border-radius: ${theme.sizes.borderRadius};
`;

class Textarea extends React.Component {
  onChange = e => {
    if (!this.props.onChange) return;
    this.props.onChange(this.props.name, e.target.value);
  };

  render = () => {
    const { name, value, label, error, placeHolder } = this.props;
    return (
      <React.Fragment>
        <MagicLabel show={value} htmlFor={name}>
          {label}
        </MagicLabel>
        <Input {...this.props} id={name} placeholder={placeHolder || label} onChange={this.onChange} />
        <FieldError show={error}>{error}</FieldError>
      </React.Fragment>
    );
  };
}

export default Textarea;
