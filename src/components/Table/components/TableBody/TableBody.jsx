import React, { useMemo } from 'react';
import Cell from '../Cell/Cell';

import styles from '../../Table.module.scss';

const TableBody = ({ list, columns }) => {
  const renderBodyCells = useMemo(() => {
    return list.map((cell) => {
      return (
        <div className={styles.tableRow}>
          {columns.map((col, index) => {
            const leftStickyPosition = col.isSticky
              ? `${index === 0 ? 0 : col.width}px`
              : null;

            return (
              <Cell
                key={cell.id}
                className={col.className}
                isSticky={col.isSticky}
                style={{
                  minWidth: `${col.width}px`,
                  maxWidth: `${col.width}px`,
                  left: leftStickyPosition,
                }}
              >
                <div>{col.renderCell(cell)}</div>
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
