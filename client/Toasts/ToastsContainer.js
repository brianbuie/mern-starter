import Link from '@app/utils/Link';
import { hideToast } from './ToastsState';

const ToastsContainer = ({ toasts, hideToast }) =>
  toasts.map(
    ({ message, id, show }) =>
      show && (
        <div key={id}>
          {message}
          <Link onClick={() => hideToast(id)}>&times;</Link>
        </div>
      )
  );

export default connect(
  ({ toasts }) => ({ toasts }),
  dispatch => ({
    hideToast: id => dispatch(hideToast(id))
  })
)(ToastsContainer);
