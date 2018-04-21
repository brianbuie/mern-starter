import React from 'react';

class Form extends React.Component {
  state = {};

  componentWillMount = () => {
    let state = {};
    this.props.fields.forEach(field => {
      state[field.name] = field.value || '';
    });
    this.setState(state);
  };

  fieldChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();
    this.props.submit({ ...this.state });
  };

  render = () => (
    <form onSubmit={this.submit}>
      {this.props.fields.map(field => (
        <div key={field.name}>
          {field.label ? <label htmlFor={field.name}>{field.label}</label> : ''}
          <input type={field.type} name={field.name} value={this.state[field.name]} onChange={this.fieldChange} />
        </div>
      ))}
      <button type="submit">{this.props.buttonText || 'Submit →'}</button>
    </form>
  );
}

export default Form;
