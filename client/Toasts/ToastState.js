import React from 'react';

export const Toast = React.createContext('toast');

export class ToastProvider extends React.Component {
  state = {
    toasts: []
  };

  timers = [];

  addToast = data => {
    const key = this.state.toasts.length;
    this.setState({
      toasts: [...this.state.toasts, { ...data, key, show: true }]
    });
    this.timers.push(setTimeout(() => this.dismissToast(key), 7000));
  };

  dismissToast = key => {
    clearTimeout(this.timers[key]);
    this.setState({
      toasts: [
        ...this.state.toasts.slice(0, key),
        { ...this.state.toasts[key], show: false },
        ...this.state.toasts.slice(key + 1)
      ]
    });
  };

  render = () => {
    const { state, addToast, dismissToast } = this;
    return (
      <Toast.Provider
        value={{
          state,
          actions: {
            addToast,
            dismissToast
          }
        }}
      >
        {this.props.children}
      </Toast.Provider>
    );
  };
}
