import Link from '@app/ui/Link';

const StyledToast = styled.div`
  margin: 1rem auto;
  color: ${props => {
    if (props.type === 'error') return theme.colors.error;
    if (props.type === 'success') return theme.colors.success;
    return theme.colors.text;
  }};

  a {
    margin-left: 1rem;
  }
`;

const Toast = ({ message, type, hide }) => (
  <StyledToast type={type}>
    {message}
    <Link onClick={hide}>&times;</Link>
  </StyledToast>
);

export default Toast;
