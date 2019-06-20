import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withRouter } from 'next/router';
import NextLink from 'next/link';
import MuiLink from '@material-ui/core/Link';

const NextComposed = React.forwardRef(function NextComposed(props, ref) { // eslint-disable-line
  const {
    as,
    href,
    prefetch,
    ...other
  } = props;

  return (
    <NextLink href={href} prefetch={prefetch} as={as} {...other}>
      {href}
    </NextLink>
  );
});

NextComposed.propTypes = {
  as: PropTypes.string,
  href: PropTypes.string,
  prefetch: PropTypes.bool,
};

NextComposed.defaultProps = {
  as: '',
  href: '',
  prefetch: false
};

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function Link(props) {
  const {
    activeClassName,
    router,
    className: classNameProps,
    innerRef,
    naked,
    href,
    ...other
  } = props;

  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === href && activeClassName,
  });

  if (naked) {
    return <NextComposed className={className} href={innerRef} {...other} />;
  }

  return <MuiLink component={NextComposed} className={className} ref={innerRef} {...other} />;
}

Link.propTypes = {
  activeClassName: PropTypes.string,
  as: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  naked: PropTypes.bool,
  onClick: PropTypes.func,
  prefetch: PropTypes.bool,
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

Link.defaultProps = {
  activeClassName: 'active',
  as: '',
  className: '',
  href: '',
  naked: false,
  onClick: () => {},
  prefetch: false,
  innerRef: null
};

const RouterLink = withRouter(Link);

export default React.forwardRef((props, ref) => <RouterLink {...props} innerRef={ref} />);
