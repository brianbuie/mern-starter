import { push } from 'react-router-redux';

const PropFilteredLink = styled.a``;

const FunctionalLink = ({ onClick, to, push, children, ...props }) => (
  <PropFilteredLink
    {...props}
    href=""
    onClick={e => {
      e.preventDefault();
      if (onClick) onClick();
      if (to) push(to);
    }}
  >
    {children}
  </PropFilteredLink>
);

const ConnectedLink = connect(null, dispatch => ({
  push: to => dispatch(push(to))
}))(FunctionalLink);

const Link = styled(ConnectedLink)`
  color: ${theme.colors.primary};
  text-decoration: none;
  font-size: ${props => (props.small ? '0.8rem' : 'inherit')};
`;

export default Link;
