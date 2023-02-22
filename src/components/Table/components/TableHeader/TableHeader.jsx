import React, { useMemo } from 'react';
import Cell from '../Cell/Cell';

import styles from '../../Table.module.scss';

const TableHeader = ({ columns }) => {
  const renderHeaderCells = useMemo(() => {
    return columns.map((cell) => {
      const { title, isSortable, key } = cell;

      if (typeof title === 'function') {
        return (
          <Cell key={title} className={cell.className}>
            {cell.title()}
            {isSortable ? '&' : null}
          </Cell>
        );
      }

      return (
        <Cell key={title} className={cell.className}>
          <div>{title}</div>
          {isSortable ? '&' : null}
        </Cell>
      );
    });
  }, [columns]);

  return <div className={styles.tableRow}>{renderHeaderCells}</div>;
};

export default TableHeader;
