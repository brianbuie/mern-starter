import { FieldError, InvisibleInput, InlineLabel } from './InputAddons';

const Doughnut = styled.span`
  background: ${props => (props.value ? theme.colors.primary : 'white')};
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
  margin: 0 0.8rem 0 0;
  transition: all 0.1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hole = styled.span`
  width: 30%;
  height: 30%;
  border-radius: 50%;
  background: white;
  opacity: ${props => (props.value ? 1 : 0)};
  transition: all 0.1s ease-in-out;
`;

class RadioButtons extends React.Component {
  onChange = e => {
    if (!this.props.onChange) return;
    this.props.onChange(this.props.name, e.target.value);
  };

  render = () => {
    const { name, label, options, error, value } = this.props;
    return (
      <React.Fragment>
        {label && <p>{label}</p>}
        {options.map(option => (
          <InlineLabel key={option.value}>
            <Doughnut value={option.value === value}>
              <Hole value={option.value === value} />
            </Doughnut>
            <InvisibleInput type="radio" value={option.value} onChange={this.onChange} checked={option.value === value} />
            {option.label}
          </InlineLabel>
        ))}
        <FieldError show={error}>{error}</FieldError>
      </React.Fragment>
    );
  };
}

export default RadioButtons;
