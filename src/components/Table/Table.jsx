import React from 'react';
import TableHeader from './components/TableHeader/TableHeader';
import TableBody from './components/TableBody/TableBody';

import { columns, list } from './columns';
import styles from './Table.module.scss';

const Table = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.table}>
        <TableHeader columns={columns} />
        <TableBody list={list} columns={columns} />
      </div>
    </div>
  );
};

export default Table;
