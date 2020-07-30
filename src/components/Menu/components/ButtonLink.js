/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ButtonLink({ className, to, children }) {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}

ButtonLink.defaultProps = {
  to: '/',
  className: '',
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ButtonLink;
