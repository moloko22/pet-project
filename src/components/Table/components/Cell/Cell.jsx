import React from 'react';
import cn from 'classnames';

import styles from './Cell.module.scss';

const Cell = ({ children, className }) => {
  return <td className={cn(styles.cell, className)}>{children}</td>;
};

export default Cell;
