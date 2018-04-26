const autoHide = 5000;

export const hideToast = id => ({
  type: 'HIDE_TOAST',
  payload: id
});

let toastId = 0;
export const newToast = toast => dispatch => {
  let id = toastId++;
  dispatch({
    type: 'NEW_TOAST',
    payload: { ...toast, id }
  });
  setTimeout(() => dispatch(hideToast(id)), autoHide);
};

export default function reducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case 'NEW_TOAST':
      return [...state, { ...payload, show: true }];
    case 'HIDE_TOAST':
      return state.map(toast => {
        if (toast.id === payload) toast.show = false;
        return toast;
      });
    default:
      return state;
  }
}
