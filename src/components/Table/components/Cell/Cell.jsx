import React from 'react';
import cn from 'classnames';

import styles from './Cell.module.scss';

const Cell = ({ children, className }) => {
  return <div className={cn(styles.cell, className)}>{children}</div>;
};

export default Cell;
