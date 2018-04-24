import React from 'react';
import { Toast } from './ToastState';
import Link from '@app/utils/Link';

const ToastDisplay = () => (
  <Toast.Consumer>
    {({ state: { toasts }, actions: { dismissToast } }) =>
      toasts.map(
        ({ message, key, show }) =>
          show && (
            <div key={key}>
              {message}
              <Link onClick={() => dismissToast(key)}>&times;</Link>
            </div>
          )
      )
    }
  </Toast.Consumer>
);

export default ToastDisplay;
