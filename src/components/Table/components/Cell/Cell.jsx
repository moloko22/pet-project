import React from 'react';
import cn from 'classnames';

import styles from './Cell.module.scss';

const Cell = ({ children, className, isSticky, style }) => {
  return (
    <div
      className={cn(styles.cell, { [styles.sticky]: isSticky }, className)}
      style={{ ...style }}
    >
      {children}
    </div>
  );
};

export default Cell;
