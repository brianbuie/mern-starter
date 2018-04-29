import TextInput from './TextInput';
import Checkbox from './Checkbox';
import RadioButtons from './RadioButtons';
import SelectInput from './SelectInput';
import Textarea from './Textarea';
import Button from '@app/ui/Button';
import { post } from '@app/utils/fetch';

const ButtonContainer = styled.div`
  margin: 2rem auto;
`;

class Form extends React.Component {
  componentWillMount = () => {
    let state = {};
    this.props.fields.forEach(field => {
      state[field.name] = {
        value: field.value || '',
        error: null
      };
    });
    this.setState(state);
  };

  fieldChange = (name, value) => {
    this.setState({
      [name]: {
        value,
        error: null
      }
    });
  };

  handleError = err => {
    if (this.props.onError) this.props.onError(err);
    if (!err.fields) return;
    err.fields.forEach(field => {
      this.setState({
        [field.name]: {
          ...this.state[field.name],
          error: field.message
        }
      });
    });
  };

  submit = async e => {
    e.preventDefault();
    let data = Object.entries(this.state).reduce((data, [name, { value }]) => {
      data[name] = value;
      return data;
    }, {});
    const res = await this.props.submit(data);
    if (!res || !res.data) return;
    if (!res.ok) return this.handleError(res.data);
    if (this.props.onSuccess) this.props.onSuccess(res.data);
  };

  render = () =>
    this.state && (
      <form onSubmit={this.submit}>
        {this.props.fields.map(field => {
          const { name, type } = field;
          const props = { ...field, ...this.state[name], key: name, onChange: this.fieldChange };
          switch (type) {
            case 'checkbox':
              return <Checkbox {...props} />;
            case 'radio':
              return <RadioButtons {...props} />;
            case 'select':
              return <SelectInput {...props} />;
            case 'textarea':
              return <Textarea {...props} />;
            default:
              return <TextInput {...props} />;
          }
        })}
        <ButtonContainer>
          <Button block color="success" type="submit">
            {this.props.buttonText || 'Submit →'}
          </Button>
        </ButtonContainer>
      </form>
    );
}

export default Form;
