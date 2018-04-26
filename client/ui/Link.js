import { Link as RouterLink } from 'react-router-dom';

const Link = ({ onClick, children, style, className, href, to }) =>
  to ? (
    <RouterLink to={to}>{children}</RouterLink>
  ) : (
    <a
      href={href || ''}
      onClick={e => {
        e.preventDefault();
        if (onClick) onClick();
      }}
      {...{ style, className }}
    >
      {children}
    </a>
  );

export default Link;
