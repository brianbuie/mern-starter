import React from 'react';
import TextInput from './TextInput';
import { post } from '@app/utils/fetch';

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

  fieldChange = e => {
    this.setState({
      [e.target.name]: {
        value: e.target.value,
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
    let data = {};
    Object.keys(this.state).forEach(field => {
      data[field] = this.state[field].value;
    });
    const res = await this.props.submit(data);
    if (!res.ok) return this.handleError(res.data);
    if (this.props.onSuccess) this.props.onSuccess(response.data);
  };

  render = () =>
    this.state && (
      <form onSubmit={this.submit}>
        {this.props.fields.map(field => (
          <TextInput key={field.name} {...field} {...this.state[field.name]} onChange={this.fieldChange} />
        ))}
        <button type="submit">{this.props.buttonText || 'Submit →'}</button>
      </form>
    );
}

export default Form;
