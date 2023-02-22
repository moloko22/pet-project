import React from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

const Button = ({ className, children, isDisabled, ...props }) => {
  return (
    <button className={cn(styles.button, className)} disabled={isDisabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
