import React from 'react';

export const Toast = React.createContext('toast');

export class ToastProvider extends React.Component {
  state = {
    messages: []
  };

  addMessage = message => {
    this.setState({
      messages: [...this.state.messages, message]
    });
  };

  render = () => (
    <Toast.Provider
      value={{
        state: this.state,
        actions: {
          addMessage: this.addMessage
        }
      }}
    >
      {this.props.children}
    </Toast.Provider>
  );
}
