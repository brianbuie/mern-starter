import React from 'react';
import styled from 'styled-components';
import { post } from '@app/utils/fetch';

const Feedback = styled.p`
  color: red;
  margin-top: 0;
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
        [field.param]: {
          ...this.state[field.param],
          error: field.msg
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
    const response = await post(this.props.action, data);
    if (!response.ok) return this.handleError(response.data);
    if (this.props.onSuccess) this.props.onSuccess(response.data);
  };

  render = () =>
    this.state && (
      <form onSubmit={this.submit}>
        {this.props.fields.map(field => (
          <div key={field.name}>
            {field.label ? <label htmlFor={field.name}>{field.label}</label> : ''}
            <input type={field.type} name={field.name} value={this.state[field.name].value} onChange={this.fieldChange} />
            {this.state[field.name].error ? <Feedback>{this.state[field.name].error}</Feedback> : ''}
          </div>
        ))}
        <button type="submit">{this.props.buttonText || 'Submit →'}</button>
      </form>
    );
}

export default Form;
