import { hideToast } from './ToastsState';
import Toast from './Toast';

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ToastsContainer = ({ toasts, hideToast }) => (
  <Container>{toasts.map(toast => toast.show && <Toast key={toast.id} {...toast} hide={() => hideToast(toast.id)} />)}</Container>
);

export default connect(
  ({ toasts }) => ({ toasts }),
  dispatch => ({
    hideToast: id => dispatch(hideToast(id))
  })
)(ToastsContainer);
