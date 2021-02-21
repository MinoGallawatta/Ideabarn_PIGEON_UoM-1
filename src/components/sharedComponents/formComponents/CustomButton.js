import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const CustomButton = props => {
  if (props.href) {
    return (
      <a
        className={`custom-button custom-button--${props.size || 'default'} ${props.inverse &&
          'custom-button--inverse'} ${props.danger && 'custom-button--danger'}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`custom-button custom-button--${props.size || 'default'} ${props.inverse &&
          'custom-button--inverse'} ${props.danger && 'custom-button--danger'}`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`custom-button button--${props.size || 'default'} ${props.inverse &&
        'custom-button--inverse'} ${props.danger && 'custom-button--danger'}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
