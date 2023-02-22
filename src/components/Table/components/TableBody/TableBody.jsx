import React, { useMemo } from 'react';
import Cell from '../Cell/Cell';

import styles from '../../Table.module.scss';

const TableBody = ({ list, columns }) => {
  const renderBodyCells = useMemo(() => {
    return list.map((cell) => {
      return (
        <div className={styles.tableRow}>
          {columns.map((col) => {
            if (typeof col.renderCell === 'function') {
              return (
                <Cell key={col.id} className={col.className}>
                  <div>{col.renderCell(cell)}</div>
                </Cell>
              );
            }

            return (
              <Cell key={col.id} className={col.className}>
                <div>-</div>
              </Cell>
            );
          })}
        </div>
      );
    });
  }, [list, columns]);

  return <div className={styles.row}>{renderBodyCells}</div>;
};

export default TableBody;
